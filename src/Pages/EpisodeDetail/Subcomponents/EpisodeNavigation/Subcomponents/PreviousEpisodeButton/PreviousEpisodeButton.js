import React from 'react';
import i18n from 'i18n-react';
import { Link } from 'react-router-dom';

import {
    ROUTE_EPISODE_DETAIL,
} from 'appUtils/routes/paths';



const PreviousEpisodeButton = ({ previousEpisode }) => (
    <div className="episode-button previous">
        <Link to={ROUTE_EPISODE_DETAIL + '/' + previousEpisode}>
            {i18n.translate('episode.previous')}
        </Link>
    </div>
);

export default PreviousEpisodeButton;
