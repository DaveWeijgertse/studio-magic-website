import React from 'react';
import ReactPlayer from 'react-player';

// Data import
import { episodes } from 'appUtils/episodes/episodes.json';

// Utils import
import getBuzzsproutMp3Link from './utils/getBuzzsproutMp3Link';

// Subcomponent import
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
    }

    componentWillMount() {
        window.currentTimeAndDurationInterval = null;
    }

    componentWillReceiveProps(nextProps) {
        const hasEpisodeIdChanged = this.props.id !== nextProps.id;

        if (hasEpisodeIdChanged) {
            this.setState({
                isPlaying: true,
                currentTime: null,
                maxDuration: null,
            });

            // Set the interval to refresh the timers, if none was set already
            if (window.currentTimeAndDurationInterval === null) {
                this.startCurrentTimeAndDurationInterval();
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
        if (typeof this.player !== 'undefined') {
            this.setState({
                currentTime: this.player.getCurrentTime(),
                maxDuration: this.player.getDuration()
            });
        }
    }

    render() {
        const {
            togglePlay,
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
            <div className="episode-player-bar-container">
                {hasEpisodeId ? (
                    <div className="episode-player-bar">
                        <PlayPauseButton
                            isPlaying={isPlaying}
                            onClick={togglePlay}
                        />
                        <div>
                            <TimerDisplay time={currentTime} />
                            <TimerDisplay time={maxDuration} />
                        </div>

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
