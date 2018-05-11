import React from 'react';

// Subcomponent imports
import EpisodeImage from '../../../Components/EpisodeImage';
import EpisodeName from './EpisodeName';
import EpisodeNumberAndDate from './EpisodeNumberAndDate';
import PlayButton from './PlayButton';

// Styling imports
import './EpisodeInfo.scss';


const EpisodeInfo = ({ episodeNumber, date, name, playingEpisodeId, playEpisodeInEpisodeBar, onStopPlayingEpisode }) => (
    <div className="episode-detail-container-episode-info">
        <div className="episode-info-container">
            <EpisodeNumberAndDate
                number={episodeNumber}
                date={date}
            />
            <EpisodeName
                name={name}
            />
            <PlayButton
                id={episodeNumber}
                playingEpisodeId={playingEpisodeId}
                playEpisodeInEpisodeBar={playEpisodeInEpisodeBar}
                onStopPlayingEpisode={onStopPlayingEpisode}
            />
        </div>

        <EpisodeImage
            episodeNumber={episodeNumber}
        />
    </div>
);

export default EpisodeInfo;
