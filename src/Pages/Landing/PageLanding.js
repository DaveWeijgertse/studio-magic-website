import React from 'react';

import {
    last,
} from 'lodash';

// Data imports
import { episodes } from 'appUtils/data/episodes.json';
import { staff } from 'appUtils/data/staff.json';

// Subcomponent imports
import Contact from './Subcomponents/Contact';
import EarlierEpisodes from './Subcomponents/EarlierEpisodes';
import LastEpisode from './Subcomponents/LastEpisode';
import OtherPodcastSources from './Subcomponents/OtherPodcastSources';
import WhoAreWe from './Subcomponents/WhoAreWe';

// Styling import
import './PageLanding.scss';


class PageLanding extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            lastEpisode: last(episodes)
        }
    }

    componentDidMount () {
        window.scrollTo(0, 0)
    }

    render() {
        const {
            lastEpisode,
        } = this.state;

        const {
            playingEpisodeId,
            playEpisodeInEpisodeBar,
            onStopPlayingEpisode,
        } = this.props;

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
                <WhoAreWe
                    staff={staff}
                />
                <Contact />
            </div>
        )
    }
}

export default PageLanding;
