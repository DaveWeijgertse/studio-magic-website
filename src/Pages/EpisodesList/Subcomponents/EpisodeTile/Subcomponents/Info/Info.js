import React from 'react';

// Subcomponent imports
import AiringDate from './Subcomponents/AiringDate';
import EpisodeImage from '../../../../../../Components/EpisodeImage';
import EpisodeNumber from './Subcomponents/EpisodeNumber';

// Styling imports
import './Info.scss';


const Info = ({id, date}) => (
    <div className="episode-tile-info">
        <AiringDate
            date={date}
        />
        <EpisodeNumber
            number={id}
        />
        <EpisodeImage
            episodeNumber={id}
        />
    </div>
);

export default Info;
