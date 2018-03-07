import React from 'react';

// Subcomponent imports
import EpisodeDate from './Subcomponents/EpisodeDate';
import EpisodeNumberLabel from './Subcomponents/EpisodeNumberLabel';


const EpisodeNumberAndDate = ({number, date}) => (
    <div>
        <EpisodeNumberLabel number={number} />
        <EpisodeDate date={date} />
    </div>
);

export default EpisodeNumberAndDate;
