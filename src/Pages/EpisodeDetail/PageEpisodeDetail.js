import React from 'react';
import { withRouter } from 'react-router';

// Data imports
import { episodes } from 'appUtils/data/episodes.json';

// Subcomponent imports
import Description from './Subcomponents/Description';
import EpisodeInfo from './Subcomponents/EpisodeInfo';
import Links from './Subcomponents/Links';
import Schedule from './Subcomponents/Schedule';


class PageEpisodeDetail extends React.Component {
    render() {
        const episodeId   = this.props.match.params.episodeId;
        const episodeData = episodes[episodeId - 1];

        const {
            id,
            description,
            links,
            schedule,
        } = episodeData;

        return (
            <div className="page-episode-detail">
                <EpisodeInfo
                    episodeNumber={id}
                />
                <Description
                    description={description}
                />
                <Schedule
                    schedule={schedule}
                />
                <Links
                    links={links}
                />
            </div>
        );
    }
}

export default withRouter(PageEpisodeDetail);
