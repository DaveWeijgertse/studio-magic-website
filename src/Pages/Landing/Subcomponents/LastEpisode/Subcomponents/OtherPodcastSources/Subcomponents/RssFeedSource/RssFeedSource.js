import React from 'react';

import {
    RSS
} from '../../utils/podcastSourceTypes';

// Utils import
import getPodcastSourceHref from '../../utils/getPodcastSourceHref';


const RssFeedSource = ({source}) => (
    <div className="rss-feed-source-container">
        <a
            href={getPodcastSourceHref(RSS)}
            rel="noopener noreferrer"
            target="_blank"
        >
        </a>
    </div>
);

export default RssFeedSource;
