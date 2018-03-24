import React from 'react';
import { withRouter } from 'react-router';

// Data imports
import { episodes } from 'appUtils/data/episodes.json';

// Subcomponent imports
import Credits from './Subcomponents/Credits';
import Description from './Subcomponents/Description';
import EpisodeInfo from './Subcomponents/EpisodeInfo';
import EpisodeNavigation from './Subcomponents/EpisodeNavigation';
import Links from './Subcomponents/Links';
import Schedule from './Subcomponents/Schedule';

// Styling import
import './PageEpisodeDetail.scss';


class PageEpisodeDetail extends React.Component {
    componentDidMount () {
        window.scrollTo(0, 0)
    }

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

        const {
            playingEpisodeId,
            playEpisodeInEpisodeBar,
            onStopPlayingEpisode,
        } = this.props;

        const hasLinks = links.length > 0;

        return (
            <div className="page-episode-detail">
                <EpisodeInfo
                    episodeNumber={id}
                    name={name}
                    date={date}
                    playingEpisodeId={playingEpisodeId}
                    playEpisodeInEpisodeBar={playEpisodeInEpisodeBar}
                    onStopPlayingEpisode={onStopPlayingEpisode}
                />
                <div className="episode-detail-container">
                    <div className="episode-detail-info-container">
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
                    <div className="episode-navigation-container">
                        <EpisodeNavigation />
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(PageEpisodeDetail);
