import React from 'react';

// Subcomponent imports
import AiringDate from './Subcomponents/AiringDate';
import EpisodeImage from '../../../EpisodeImage';
import EpisodeNumber from './Subcomponents/EpisodeNumber';
import Name from './Subcomponents/Name';

// Styling imports
import './Info.scss';


const Info = ({id, date, name}) => (
    <div className="episode-tile-info">
        <AiringDate
            date={date}
        />
        <div className="episode-number-name">
            <EpisodeNumber
                number={id}
            />
            <Name
                name={name}
            />
        </div>
        <EpisodeImage
            episodeNumber={id}
        />
    </div>
);

export default Info;
