import React from 'react';

// Subcomponent imports
import Description from './Description';
import EpisodeImage from '../../../Components/EpisodeImage';
import EpisodeName from './EpisodeName';
import EpisodeNumberAndDate from './EpisodeNumberAndDate';
import PlayButtonAndMoreInfo from './PlayButtonAndMoreInfo';

// Styling imports
import './LastEpisode.scss';


const LastEpisode = ({lastEpisode, playingEpisodeId, playEpisodeInEpisodeBar, onStopPlayingEpisode}) => {
    const {
        date,
        shortDescription,
        id,
        name,
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
                <PlayButtonAndMoreInfo
                    id={id}
                    playingEpisodeId={playingEpisodeId}
                    playEpisodeInEpisodeBar={playEpisodeInEpisodeBar}
                    onStopPlayingEpisode={onStopPlayingEpisode}
                />
            </div>
            <EpisodeImage
                episodeNumber={id}
            />
        </div>
    );
}

export default LastEpisode;
