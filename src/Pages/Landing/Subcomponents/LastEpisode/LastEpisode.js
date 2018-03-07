import React from 'react';

// Subcomponent imports
import EpisodeName from './Subcomponents/EpisodeName';
import EpisodeNumberAndDate from './Subcomponents/EpisodeNumberAndDate';
import ExtraTopics from './Subcomponents/ExtraTopics';
import LatestEpisodeText from './Subcomponents/LatestEpisodeText';

// Styling imports
import './LastEpisode.scss';


const LastEpisode = ({lastEpisode}) => {
    const {
        date,
        id,
        name,
        'extra-topics': extraTopics,
    } = lastEpisode;

    return (
        <div className="last-episode-container">
            <div className="content">
                <LatestEpisodeText />
                <EpisodeNumberAndDate
                    number={id}
                    date={date}
                />
                <EpisodeName
                    name={name}
                />
                <ExtraTopics
                    extraTopics={extraTopics}
                />
            </div>
            <div className="background" />
        </div>
    );
}

export default LastEpisode;
