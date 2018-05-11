import React from 'react';

// Subcomponent imports
import EpisodeDate from './Subcomponents/EpisodeDate';
import EpisodeNumberLabel from './Subcomponents/EpisodeNumberLabel';

// Styling imports
import './EpisodeNumberAndDate.scss';


const EpisodeNumberAndDate = ({number, date}) => (
    <div className="episode-number-and-date-container">
        <EpisodeNumberLabel number={number} />
        <EpisodeDate date={date} />
    </div>
);

export default EpisodeNumberAndDate;
