import React from 'react';
import ReactPlayer from 'react-player';

// Data import
import { episodes } from 'appUtils/episodes/episodes.json';

// Utils import
import getBuzzsproutMp3Link from './utils/getBuzzsproutMp3Link';

// Subcomponent import
import PlayPauseButton from './Subcomponents/PlayPauseButton';

class EpisodePlayerBar extends React.Component {
    render() {
        const {
            id,
        } = this.props;

        const hasEpisodeId = typeof id !== 'undefined' && id !== null;

        return (
            <div className="episode-player-bar-container">
                {hasEpisodeId ? (
                    <div className="episode-player-bar">
                        <PlayPauseButton
                        />

                        <ReactPlayer
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
