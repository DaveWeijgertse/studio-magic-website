import React from 'react';

// Styling imports
import './EpisodeName.scss';

// @todo: remove duplicate component
const EpisodeName = ({name}) => (
    <div className="episode-name">
        {name}
    </div>
);

export default EpisodeName;
