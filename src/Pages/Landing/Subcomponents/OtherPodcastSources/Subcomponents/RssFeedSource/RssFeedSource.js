import React from 'react';

import {
    RSS
} from '../../utils/podcastSourceTypes';

// Utils import
import getPodcastSourceHref from '../../utils/getPodcastSourceHref';

// Styling import
import './RssFeedSource.scss';


const RssFeedSource = ({source}) => (
    <div className="rss-feed-source-container">
        <a
            className="source-rss-feed"
            href={getPodcastSourceHref(RSS)}
            rel="noopener noreferrer"
            target="_blank"
        >
        </a>
    </div>
);

export default RssFeedSource;
