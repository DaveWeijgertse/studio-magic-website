import React from 'react';
import i18n from 'i18n-react';
import { Link } from 'react-router-dom';

import { ROUTE_EPISODES_LIST } from 'appUtils/routes/paths';

// Styling import
import './ToAllEpisodesButton.scss';

const ToAllEpisodesButton = () => (
    <div className="button-container">
        <Link to={ROUTE_EPISODES_LIST}>{i18n.translate('episode.all')}</Link>
    </div>
);

export default ToAllEpisodesButton;
