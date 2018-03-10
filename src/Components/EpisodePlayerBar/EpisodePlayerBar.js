import React from 'react';
import ReactPlayer from 'react-player';

// Data import
import { episodes } from 'appUtils/episodes/episodes.json';

// Utils import
import getBuzzsproutMp3Link from './utils/getBuzzsproutMp3Link';

// Subcomponent import
import PlayPauseButton from './Subcomponents/PlayPauseButton';

// Styling import
import './EpisodePlayerBar.scss';


class EpisodePlayerBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isPlaying: true,
        }

        this.togglePlay = this.togglePlay.bind(this);
    }

    togglePlay() {
        this.setState({
            isPlaying: !this.state.isPlaying
        });
    }

    render() {
        const {
            togglePlay,
        } = this;

        const {
            id,
        } = this.props;

        const {
            isPlaying,
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

                        <ReactPlayer
                            className="sound-source"
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
