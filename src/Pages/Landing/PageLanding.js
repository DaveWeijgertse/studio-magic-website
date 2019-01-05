import React from 'react';

import { last } from 'lodash';

// Data imports
import { episodes } from 'utils/data/episodes.json';
import { staff } from 'utils/data/staff.json';

// Subcomponent imports
import Contact from './Contact';
import EarlierEpisodes from './EarlierEpisodes';
import LastEpisode from './LastEpisode';
import OtherPodcastSources from './OtherPodcastSources';
import WhoAreWe from './WhoAreWe';

// Styling import
import './PageLanding.scss';

class PageLanding extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            lastEpisode: last(episodes),
        };
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        const { lastEpisode } = this.state;

        const { playingEpisodeId, playEpisodeInEpisodeBar, onStopPlayingEpisode } = this.props;

        return (
            <div className="page-landing">
                <LastEpisode
                    lastEpisode={lastEpisode}
                    playingEpisodeId={playingEpisodeId}
                    playEpisodeInEpisodeBar={playEpisodeInEpisodeBar}
                    onStopPlayingEpisode={onStopPlayingEpisode}
                />
                <EarlierEpisodes
                    episodes={episodes}
                    playingEpisodeId={playingEpisodeId}
                    playEpisodeInEpisodeBar={playEpisodeInEpisodeBar}
                    onStopPlayingEpisode={onStopPlayingEpisode}
                />
                <OtherPodcastSources />
                <WhoAreWe staff={staff} />
                <Contact />
            </div>
        );
    }
}

export default PageLanding;
