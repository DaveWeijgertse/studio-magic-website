import React from 'react';
import i18n from 'i18n-react';
import { Link } from 'react-router-dom';

import {
    ROUTE_EPISODES_LIST,
} from 'appUtils/routes/paths';



const AllEpisodeButton = () => (
    <div className="episode-button all">
        <Link to={ROUTE_EPISODES_LIST}>
            {i18n.translate('episode.all')}
        </Link>
    </div>
);

export default AllEpisodeButton;
