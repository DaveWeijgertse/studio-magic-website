import React from 'react';
import i18n from 'i18n-react';
import { reverse } from 'lodash';
import { Link } from 'react-router-dom';

import {
    ROUTE_EPISODES_LIST,
} from 'appUtils/routes/paths';

// Subcomponent imports
import VisibleEpisodes from './Subcomponents/VisibleEpisodes';

// Styling import
import './EarlierEpisodes.scss';


class EarlierEpisodes extends React.Component {
    constructor(props) {
        super(props);

        const episodesList = reverse(JSON.parse(JSON.stringify(this.props.episodes)));

        // Show the second-to-last, third-to-last and fourth-to-last episode
        const visibleEpisodes = episodesList.splice(1, 3);

        this.state = {
            visibleEpisodes
        }
    }

    render() {
        const {
            visibleEpisodes,
        } = this.state;

        const {
            playingEpisodeId,
            playEpisodeInEpisodeBar,
            onStopPlayingEpisode,
        } = this.props;

        return (
            <div className="earlier-episodes-container">
                <h1>{i18n.translate('episode.earlier')}</h1>
                <VisibleEpisodes
                    visibleEpisodes={visibleEpisodes}
                    playingEpisodeId={playingEpisodeId}
                    playEpisodeInEpisodeBar={playEpisodeInEpisodeBar}
                    onStopPlayingEpisode={onStopPlayingEpisode}
                />
                <div className="button-container">
                    <Link to={ROUTE_EPISODES_LIST}>
                        {i18n.translate('episode.see-all')}
                    </Link>
                </div>
            </div>
        )
    }
}

export default EarlierEpisodes;
