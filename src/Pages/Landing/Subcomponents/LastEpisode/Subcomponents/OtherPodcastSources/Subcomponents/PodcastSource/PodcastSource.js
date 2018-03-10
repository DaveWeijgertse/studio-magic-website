import React from 'react';

// Utils import
import getPodcastSourceHref from '../../utils/getPodcastSourceHref';
import getPodcastSourceIcon from '../../utils/getPodcastSourceIcon';


const PodcastSource = ({source}) => (
    <div className="podcast-source-container">
        <a
            href={getPodcastSourceHref(source)}
            target="_blank"
        >
            <img
                alt={source}
                src={getPodcastSourceIcon(source)}
            />
        </a>
    </div>
);

export default PodcastSource;
