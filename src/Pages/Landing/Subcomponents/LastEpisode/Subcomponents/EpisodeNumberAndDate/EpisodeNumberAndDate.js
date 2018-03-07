import React from 'react';

// Subcomponent imports
import EpisodeDate from './Subcomponents/EpisodeDate';
import EpisodeNumberLabel from './Subcomponents/EpisodeNumberLabel';


const EpisodeNumberAndDate = () => (
    <div>
        <EpisodeNumberLabel />
        <EpisodeDate />
    </div>
);

export default EpisodeNumberAndDate;
