import React from 'react';
import { withRouter } from 'react-router';

// Data imports
import { episodes } from 'utils/data/episodes.json';

// Subcomponent imports
import Credits from './Credits';
import Description from './Description';
import EpisodeInfo from './EpisodeInfo';
import EpisodeNavigation from './EpisodeNavigation';
import Links from './Links';
import Schedule from './Schedule';

// Styling import
import './PageEpisodeDetail.scss';

class PageEpisodeDetail extends React.Component {
    constructor(props) {
        super(props);

        this.scrollToTop = this.scrollToTop.bind(this);
        this.onClickEpisodeButton = this.onClickEpisodeButton.bind(this);
    }

    componentDidMount() {
        this.scrollToTop();
    }

    onClickEpisodeButton() {
        this.scrollToTop();
    }

    scrollToTop() {
        window.scrollTo(0, 0);
    }

    render() {
        const episodeId = this.props.episodeId;
        const episodeData = episodes[episodeId - 1];
        const totalEpisodes = episodes.length;

        const { id, name, date, description, links, schedule, credits } = episodeData;

        const { onClickEpisodeButton } = this;

        const { playingEpisodeId, playEpisodeInEpisodeBar, onStopPlayingEpisode } = this.props;

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
                        <Description episodeId={episodeId} description={description} />
                        <Schedule schedule={schedule} />
                        {hasLinks && <Links links={links} />}
                        <Credits credits={credits} />
                    </div>
                    <div className="episode-navigation-container">
                        <EpisodeNavigation
                            currentEpisode={id}
                            totalEpisodes={totalEpisodes}
                            onClickEpisodeButton={onClickEpisodeButton}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(PageEpisodeDetail);
