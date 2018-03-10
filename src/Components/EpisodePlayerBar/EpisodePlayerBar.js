import React from 'react';


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
                    </div>
                ) : null}
            </div>
        )
    }
}

export default EpisodePlayerBar;
