import React from 'react';
import { withRouter } from 'react-router';

// Data imports
import { episodes } from 'appUtils/data/episodes.json';


class PageEpisodeDetail extends React.Component {
    render() {
        const episodeId   = this.props.match.params.episodeId;
        const episodeData = episodes[episodeId - 1];
        return (
            <div className="page-episode-detail">
            </div>
        );
    }
}

export default withRouter(PageEpisodeDetail);
