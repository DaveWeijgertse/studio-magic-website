import React from 'react';

// Utils import
import getPodcastSourceHref from '../../utils/getPodcastSourceHref';
import getPodcastSourceIcon from '../../utils/getPodcastSourceIcon';

// Styling import
import './PodcastSource.scss';


const PodcastSource = ({source}) => (
    <div className="podcast-source-container">
        <a
            href={getPodcastSourceHref(source)}
            rel="noopener noreferrer"
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
