import React from 'react';

// Subcomponent imports
import EpisodeName from './Subcomponents/EpisodeName';
import EpisodeNumberAndDate from './Subcomponents/EpisodeNumberAndDate';
import LatestEpisodeText from './Subcomponents/LatestEpisodeText';

// Styling imports
import './LastEpisode.scss';


const LastEpisode = () => (
    <div className="last-episode-container">
        <div className="content">
            <LatestEpisodeText />
            <EpisodeNumberAndDate />
            <EpisodeName />
        </div>
        <div className="background" />
    </div>
);

export default LastEpisode;
