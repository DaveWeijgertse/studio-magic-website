import React from 'react';

// Subcomponent imports
import EpisodeDate from './Subcomponents/EpisodeDate';
import EpisodeNumberLabel from './Subcomponents/EpisodeNumberLabel';


const EpisodeNumberAndDate = ({number}) => (
    <div>
        <EpisodeNumberLabel number={number} />
        <EpisodeDate />
    </div>
);

export default EpisodeNumberAndDate;
