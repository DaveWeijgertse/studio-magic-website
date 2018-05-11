import React from 'react';
import i18n from 'i18n-react';
import { Link } from 'react-router-dom';

import {
    ROUTE_EPISODES_LIST,
    ROUTE_DISCLAIMER,
} from 'appUtils/routes/paths';

// Styling imports
import './LinksToPodcastPages.scss';


const LinksToPodcastPages = () => (
    <div className="links-to-podcast-pages-container">
        <div className="footer-header">
            {i18n.translate('podcast')}
        </div>
        <Link to={ROUTE_EPISODES_LIST}>
            {i18n.translate('episode.all')}
        </Link>
        <Link to={ROUTE_DISCLAIMER}>
            {i18n.translate('disclaimer')}
        </Link>
    </div>
);

export default LinksToPodcastPages;
