import React from 'react';
import i18n from 'i18n-react';
import { Link } from 'react-router-dom';

import {
    ROUTE_EPISODES_LIST,
} from 'appUtils/routes/paths';



const Navigation = () => (
    <div className="navigation-container">
        <Link to={ROUTE_EPISODES_LIST}>
            {i18n.translate('episode.plural')}
        </Link>
    </div>
);

export default Navigation;
