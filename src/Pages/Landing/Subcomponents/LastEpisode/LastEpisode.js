import React from 'react';

// Subcomponent imports
import EpisodeName from './Subcomponents/EpisodeName';
import EpisodeNumberAndDate from './Subcomponents/EpisodeNumberAndDate';
import LatestEpisodeText from './Subcomponents/LatestEpisodeText';

// Styling imports
import './LastEpisode.scss';


const LastEpisode = ({lastEpisode}) => {
    const {
        id,
    } = lastEpisode;

    return (
        <div className="last-episode-container">
            <div className="content">
                <LatestEpisodeText />
                <EpisodeNumberAndDate
                    number={id}
                />
                <EpisodeName />
            </div>
            <div className="background" />
        </div>
    );
}

export default LastEpisode;
