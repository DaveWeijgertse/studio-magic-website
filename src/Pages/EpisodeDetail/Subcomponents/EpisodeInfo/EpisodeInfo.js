import React from 'react';

// Subcomponent imports
import EpisodeImage from '../../../../Components/EpisodeImage';

// Styling imports
import './EpisodeInfo.scss';


const EpisodeInfo = ({ episodeNumber }) => (
    <div className="episode-detail-container-episode-info">
        <EpisodeImage
            episodeNumber={episodeNumber}
        />
    </div>
);

export default EpisodeInfo;
