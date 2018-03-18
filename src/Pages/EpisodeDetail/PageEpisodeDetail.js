import React from 'react';
import { withRouter } from 'react-router';

// Data imports
import { episodes } from 'appUtils/data/episodes.json';

// Subcomponent imports
import Description from './Subcomponents/Description';
import Links from './Subcomponents/Links';


class PageEpisodeDetail extends React.Component {
    render() {
        const episodeId   = this.props.match.params.episodeId;
        const episodeData = episodes[episodeId - 1];

        const {
            description,
            links,
        } = episodeData;

        return (
            <div className="page-episode-detail">
                <Description
                    description={description}
                />
                <Links
                    links={links}
                />
            </div>
        );
    }
}

export default withRouter(PageEpisodeDetail);
