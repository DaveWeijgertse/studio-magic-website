import React from 'react';

// Subcomponent imports
import Info from './Subcomponents/Info';



const EpisodeTile = ({id}) => (
    <div className="episode-tile">
        <Info
            id={id}
        />
    </div>
);

export default EpisodeTile;
