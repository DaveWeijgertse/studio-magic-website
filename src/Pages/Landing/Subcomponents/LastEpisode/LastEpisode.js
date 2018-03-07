import React from 'react';

// Subcomponent imports
import EpisodeName from './Subcomponents/EpisodeName';
import EpisodeNumberAndDate from './Subcomponents/EpisodeNumberAndDate';
import ExtraTopicsAndPlayButton from './Subcomponents/ExtraTopicsAndPlayButton';
import LatestEpisodeText from './Subcomponents/LatestEpisodeText';

// Styling imports
import './LastEpisode.scss';


const LastEpisode = ({lastEpisode}) => {
    const {
        date,
        'extra-topics': extraTopics,
        id,
        name,
        url,
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
                <ExtraTopicsAndPlayButton
                    extraTopics={extraTopics}
                    url={url}
                />
            </div>
            <div className="background" />
        </div>
    );
}

export default LastEpisode;
