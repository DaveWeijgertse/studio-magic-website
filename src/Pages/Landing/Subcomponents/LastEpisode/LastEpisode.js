import React from 'react';

// Subcomponent imports
import LatestEpisodeText from './Subcomponents/LatestEpisodeText';

// Styling imports
import './LastEpisode.scss';


const LastEpisode = () => (
    <div className="last-episode-container">
        <div className="content">
            <LatestEpisodeText />
        </div>
        <div className="background" />
    </div>
);

export default LastEpisode;
