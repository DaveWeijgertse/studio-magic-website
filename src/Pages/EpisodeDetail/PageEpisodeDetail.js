import React from 'react';
import { withRouter } from 'react-router';

// Data imports
import { episodes } from 'appUtils/data/episodes.json';

// Subcomponent imports
import Credits from './Subcomponents/Credits';
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
            name,
            date,
            description,
            links,
            schedule,
            credits,
        } = episodeData;

        const hasLinks = links.length > 0;

        return (
            <div className="page-episode-detail">
                <EpisodeInfo
                    episodeNumber={id}
                    name={name}
                    date={date}
                />
                <Description
                    description={description}
                />
                <Schedule
                    schedule={schedule}
                />
                {hasLinks && (
                    <Links
                        links={links}
                    />
                )}
                <Credits
                    credits={credits}
                />
            </div>
        );
    }
}

export default withRouter(PageEpisodeDetail);
