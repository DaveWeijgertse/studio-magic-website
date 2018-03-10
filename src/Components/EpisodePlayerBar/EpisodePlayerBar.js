import React from 'react';

// Data import
import { episodes } from 'appUtils/episodes/episodes.json';

// Utils import
import getBuzzsproutMp3Link from './utils/getBuzzsproutMp3Link';

class EpisodePlayerBar extends React.Component {
    render() {
        const {
            id,
        } = this.props;

        const isPlayingEpisode = typeof id !== 'undefined' && id !== null;

        return (
            <div className="episode-player-bar-container">
                {isPlayingEpisode ? (
                    <div className="episode-player-bar">
                        <iframe
                            src={getBuzzsproutMp3Link(id, episodes)}
                            width="100%"
                            height="73"
                            frameborder="0"
                            scrolling="no"
                        />
                    </div>
                ) : null}
            </div>
        )
    }
}

export default EpisodePlayerBar;
