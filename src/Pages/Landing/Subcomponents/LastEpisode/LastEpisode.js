import React from 'react';

// Subcomponent imports
import EpisodeName from './Subcomponents/EpisodeName';
import EpisodeNumberAndDate from './Subcomponents/EpisodeNumberAndDate';
import ExtraTopics from './Subcomponents/ExtraTopics';
import PlayButton from './Subcomponents/PlayButton';

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
                <EpisodeNumberAndDate
                    number={id}
                    date={date}
                />
                <EpisodeName
                    name={name}
                />

                {extraTopics.length > 0 ? <ExtraTopics extraTopics={extraTopics} /> : null}

                <PlayButton url={url} />
            </div>
            <div className="background" />
        </div>
    );
}

export default LastEpisode;
