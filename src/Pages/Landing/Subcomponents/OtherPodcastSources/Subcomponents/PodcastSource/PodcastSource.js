import React from 'react';

// Utils import
import getPodcastSourceHref from '../../utils/getPodcastSourceHref';
import getPodcastSourceIcon from '../../utils/getPodcastSourceIcon';
import getTooltipText from '../../utils/getTooltipText';

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
                title={getTooltipText(source)}
                src={getPodcastSourceIcon(source)}
            />
        </a>
    </div>
);

export default PodcastSource;
