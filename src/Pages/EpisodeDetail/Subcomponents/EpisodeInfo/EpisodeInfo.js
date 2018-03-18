import React from 'react';

// Subcomponent imports
import EpisodeImage from '../../../../Components/EpisodeImage';
import EpisodeName from './Subcomponents/EpisodeName';
import EpisodeNumberAndDate from './Subcomponents/EpisodeNumberAndDate';
import PlayButton from './Subcomponents/PlayButton';

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
