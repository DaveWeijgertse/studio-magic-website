import React from 'react';

// Subcomponent imports
import Info from './Subcomponents/Info';

// Styling import
import './EpisodeTile.scss';


const EpisodeTile = ({id}) => (
    <div className="episode-tile">
        <Info
            id={id}
        />
    </div>
);

export default EpisodeTile;
