import React from 'react';

import {
    last,
} from 'lodash';

// Data imports
import { episodes } from 'appUtils/episodes/episodes.json';

// Subcomponent imports
import EarlierEpisodes from './Subcomponents/EarlierEpisodes';
import LastEpisode from './Subcomponents/LastEpisode';

// Styling import
import './PageLanding.scss';


class PageLanding extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            lastEpisode: last(episodes)
        }
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
            </div>
        )
    }
}

export default PageLanding;
