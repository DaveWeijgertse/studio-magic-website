import React from 'react';
import i18n from 'i18n-react';
import { Link } from 'react-router-dom';

import {
    ROUTE_EPISODE_DETAIL,
 } from 'appUtils/routes/episodeDetailPaths';

// Styling import
import './NextEpisodeButton.scss';


const NextEpisodeButton = ({ nextEpisode, onClick }) => (
    <div
        className="episode-button next"
        onClick={onClick}
    >
        <Link to={ROUTE_EPISODE_DETAIL[nextEpisode]}>
            {i18n.translate('episode.next')}
        </Link>
    </div>
);

export default NextEpisodeButton;
