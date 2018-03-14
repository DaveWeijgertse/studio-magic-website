import React from 'react';
import ReactPlayer from 'react-player';

// Data import
import { episodes } from 'appUtils/data/episodes.json';

// Utils import
import getBuzzsproutMp3Link from './utils/getBuzzsproutMp3Link';

// Subcomponent import
import CloseEpisodeBarButton from './Subcomponents/CloseEpisodeBarButton';
import EpisodeInfo from './Subcomponents/EpisodeInfo';
import PlayPauseButton from './Subcomponents/PlayPauseButton';
import TimerDisplay from './Subcomponents/TimerDisplay';

// Styling import
import './EpisodePlayerBar.scss';


class EpisodePlayerBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isPlaying: true,
            currentTime: null,
            maxDuration: null,
        }

        this.togglePlay = this.togglePlay.bind(this);
        this.startCurrentTimeAndDurationInterval = this.startCurrentTimeAndDurationInterval.bind(this);
        this.updateCurrentTimeAndDuration = this.updateCurrentTimeAndDuration.bind(this);
        this.stopCurrentTimeAndDurationInterval = this.stopCurrentTimeAndDurationInterval.bind(this);
        this.onCloseEpisodeBar = this.onCloseEpisodeBar.bind(this);
    }

    componentWillMount() {
        window.currentTimeAndDurationInterval = null;
    }

    componentWillReceiveProps(nextProps) {
        const {
            startCurrentTimeAndDurationInterval,
        } = this;

        const hasEpisodeIdChanged = this.props.id !== nextProps.id;

        if (hasEpisodeIdChanged) {
            this.setState({
                isPlaying: true,
                currentTime: null,
                maxDuration: null,
            });

            // Set the interval to refresh the timers, if none was set already
            if (window.currentTimeAndDurationInterval === null) {
                startCurrentTimeAndDurationInterval();
            }
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

    onCloseEpisodeBar() {
        const {
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
        this.setState({
            isPlaying: false,
            currentTime: null,
            maxDuration: null
        });
    }

    render() {
        const {
            togglePlay,
            onCloseEpisodeBar,
        } = this;

        const {
            id,
        } = this.props;

        const {
            currentTime,
            isPlaying,
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
                        <div className="current-time-max-duration">
                            <TimerDisplay type="currentTime" time={currentTime} />
                            <div className="divider">/</div>
                            <TimerDisplay type="maxDuration" time={maxDuration} />
                        </div>
                        <EpisodeInfo
                            id={id}
                            name={episodes[id - 1].name}
                        />
                        <CloseEpisodeBarButton
                            onCloseEpisodeBar={onCloseEpisodeBar}
                        />

                        <ReactPlayer
                            className="sound-source"
                            ref={(player) => { this.player = player}}
                            url={getBuzzsproutMp3Link(id, episodes) + ".mp3"}
                            playing={isPlaying}
                        />
                    </div>
                ) : null}
            </div>
        )
    }
}

export default EpisodePlayerBar;
