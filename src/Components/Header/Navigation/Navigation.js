import React from 'react';
import i18n from 'i18n-react';
import { Link } from 'react-router-dom';

import { ROUTE_EPISODES_LIST } from 'utils/routes/paths';

// Styling import
import './Navigation.scss';

const Navigation = () => (
    <div className="navigation-container">
        <Link to={ROUTE_EPISODES_LIST}>{i18n.translate('episode.plural')}</Link>
    </div>
);

export default Navigation;
