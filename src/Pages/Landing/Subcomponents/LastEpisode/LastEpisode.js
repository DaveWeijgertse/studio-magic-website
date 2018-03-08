import React from 'react';

// Subcomponent imports
import Description from './Subcomponents/Description';
import EpisodeName from './Subcomponents/EpisodeName';
import EpisodeNumberAndDate from './Subcomponents/EpisodeNumberAndDate';
import PlayButton from './Subcomponents/PlayButton';

// Styling imports
import './LastEpisode.scss';


const LastEpisode = ({lastEpisode}) => {
    const {
        date,
        shortDescription,
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
                <Description
                    description={shortDescription}
                />
                <PlayButton
                    url={url}
                />
            </div>
            <div className="background" />
        </div>
    );
}

export default LastEpisode;
