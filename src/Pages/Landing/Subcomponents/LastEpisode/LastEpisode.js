import React from 'react';

// Subcomponent imports
import Description from './Subcomponents/Description';
import EpisodeImage from '../../../../Components/EpisodeImage';
import EpisodeName from './Subcomponents/EpisodeName';
import EpisodeNumberAndDate from './Subcomponents/EpisodeNumberAndDate';
import OtherPodcastSources from './Subcomponents/OtherPodcastSources';
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
                <OtherPodcastSources />
            </div>
            <EpisodeImage
                episodeNumber={id}
            />
        </div>
    );
}

export default LastEpisode;
