import React from 'react';
import ReactPlayer from 'react-player';

// Data import
import { episodes } from 'appUtils/data/episodes.json';

// Utils import
import getBuzzsproutMp3Link from './utils/getBuzzsproutMp3Link';

// Subcomponent import
import CloseEpisodeBarButton from './Subcomponents/CloseEpisodeBarButton';
import CurrentTimeAndMaxDuration from './Subcomponents/CurrentTimeAndMaxDuration';
import EpisodeInfo from './Subcomponents/EpisodeInfo';
import PlayPauseButton from './Subcomponents/PlayPauseButton';
import SeekerBar from './Subcomponents/SeekerBar';

// Styling import
import './EpisodePlayerBar.scss';


class EpisodePlayerBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = this.setInitialState();

        this.setInitialState = this.setInitialState.bind(this);
        this.togglePlay = this.togglePlay.bind(this);
        this.startCurrentTimeAndDurationInterval = this.startCurrentTimeAndDurationInterval.bind(this);
        this.updateCurrentTimeAndDuration = this.updateCurrentTimeAndDuration.bind(this);
        this.stopCurrentTimeAndDurationInterval = this.stopCurrentTimeAndDurationInterval.bind(this);
        this.onCloseEpisodeBar = this.onCloseEpisodeBar.bind(this);
        this.onProgress = this.onProgress.bind(this);
        this.onSeekChange = this.onSeekChange.bind(this);
        this.onSeekMouseDown = this.onSeekMouseDown.bind(this);
        this.onSeekMouseUp = this.onSeekMouseUp.bind(this);
    }

    componentWillMount() {
        window.currentTimeAndDurationInterval = null;
    }

    componentWillReceiveProps(nextProps) {
        const {
            startCurrentTimeAndDurationInterval,
            setInitialState,
        } = this;

        const hasEpisodeIdChanged = this.props.id !== nextProps.id;

        if (hasEpisodeIdChanged) {
            this.setState(setInitialState());

            // Set the interval to refresh the timers, if none was set already
            if (window.currentTimeAndDurationInterval === null) {
                startCurrentTimeAndDurationInterval();
            }
        }
    }

    setInitialState() {
        return {
            isPlaying:   false,
            currentTime: null,
            maxDuration: null,
            played:      0,
        }
    }

    togglePlay() {
        this.setState({
            isPlaying: !this.state.isPlaying
        });
    }

    startCurrentTimeAndDurationInterval() {
        window.currentTimeAndDurationInterval = setInterval(this.updateCurrentTimeAndDuration, 1000);
    }

    updateCurrentTimeAndDuration() {
        if (typeof this.player !== 'undefined' && this.player !== null) {
            this.setState({
                currentTime: this.player.getCurrentTime(),
                maxDuration: this.player.getDuration()
            });
        }
    }

    stopCurrentTimeAndDurationInterval() {
        clearInterval(window.currentTimeAndDurationInterval);
        window.currentTimeAndDurationInterval = null;
    }

    onProgress({ played }) {
        const {
            seeking,
        } = this.state;

        if (!seeking) {
            this.setState({
                played,
            });
        }
    }

    onSeekMouseDown() {
        this.setState({
            seeking: true,
        });
    }

    onSeekMouseUp(newPlayedValue) {
        this.setState({
            seeking: false,
        });

        // Move the seeker
        this.player.seekTo(newPlayedValue);
    }

    onSeekChange(newPlayedValue) {
        this.setState({
            played: newPlayedValue
        });
    }

    onCloseEpisodeBar() {
        const {
            setInitialState,
            stopCurrentTimeAndDurationInterval,
        } = this;

        const {
            onStopPlayingEpisode,
        } = this.props;

        // Stop playing the episode and hide the <EpisodePlayerBar>
        onStopPlayingEpisode();

        // Stop the time interval
        stopCurrentTimeAndDurationInterval();

        // Reset the state
        this.setState(setInitialState());
    }

    render() {
        const {
            togglePlay,
            onCloseEpisodeBar,
            onProgress,
            onSeekChange,
            onSeekMouseDown,
            onSeekMouseUp,
        } = this;

        const {
            id,
        } = this.props;

        const {
            currentTime,
            isPlaying,
            played,
            maxDuration,
        } = this.state;

        const hasEpisodeId = typeof id !== 'undefined' && id !== null;

        return (
            <div className={"episode-player-bar-container " + (hasEpisodeId ? "active" : "inactive")}>
                {hasEpisodeId ? (
                    <div className="episode-player-bar">
                        <PlayPauseButton
                            isPlaying={isPlaying}
                            onClick={togglePlay}
                        />
                        <div className="episode-player-bar-info-seeker-container">
                            <EpisodeInfo
                                id={id}
                                name={episodes[id - 1].name}
                            />
                            <div>
                                <SeekerBar
                                    played={played}
                                    onSeekChange={onSeekChange}
                                    onSeekMouseDown={onSeekMouseDown}
                                    onSeekMouseUp={onSeekMouseUp}
                                />
                                <CurrentTimeAndMaxDuration
                                    currentTime={currentTime}
                                    maxDuration={maxDuration}
                                />
                            </div>
                        </div>
                        <CloseEpisodeBarButton
                            onCloseEpisodeBar={onCloseEpisodeBar}
                        />

                        <ReactPlayer
                            className="sound-source"
                            ref={(player) => { this.player = player}}
                            url={getBuzzsproutMp3Link(id, episodes) + ".mp3"}
                            playing={isPlaying}
                            onProgress={onProgress}
                        />
                    </div>
                ) : null}
            </div>
        )
    }
}

export default EpisodePlayerBar;
