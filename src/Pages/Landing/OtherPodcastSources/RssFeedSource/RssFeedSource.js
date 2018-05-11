import React from 'react';

import { RSS } from '../utils/podcastSourceTypes';

// Utils import
import getPodcastSourceHref from '../utils/getPodcastSourceHref';
import getTooltipText from '../utils/getTooltipText';

// Styling import
import './RssFeedSource.scss';

const RssFeedSource = ({ source }) => (
    <div className="rss-feed-source-container">
        <a
            className="source-rss-feed"
            title={getTooltipText(RSS)}
            href={getPodcastSourceHref(RSS)}
            rel="noopener noreferrer"
            target="_blank"
        />
    </div>
);

export default RssFeedSource;
