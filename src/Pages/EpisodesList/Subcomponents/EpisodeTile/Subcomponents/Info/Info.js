import React from 'react';

// Subcomponent imports
import EpisodeImage from '../../../../../../Components/EpisodeImage';

// Styling imports
import './Info.scss';


const Info = ({id}) => (
    <div className="episode-tile-info">

        <EpisodeImage
            episodeNumber={id}
        />
    </div>
);

export default Info;
