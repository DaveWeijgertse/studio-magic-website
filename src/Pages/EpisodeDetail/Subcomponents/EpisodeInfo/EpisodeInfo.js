import React from 'react';

// Subcomponent imports
import EpisodeImage from '../../../../Components/EpisodeImage';
import EpisodeName from './Subcomponents/EpisodeName';
import EpisodeNumberAndDate from './Subcomponents/EpisodeNumberAndDate';

// Styling imports
import './EpisodeInfo.scss';


const EpisodeInfo = ({ episodeNumber, date, name }) => (
    <div className="episode-detail-container-episode-info">
        <div className="episode-info-container">
            <EpisodeNumberAndDate
                number={episodeNumber}
                date={date}
            />
            <EpisodeName
                name={name}
            />
        </div>

        <EpisodeImage
            episodeNumber={episodeNumber}
        />
    </div>
);

export default EpisodeInfo;
