import React from 'react';

// Subcomponent imports
import Info from './Subcomponents/Info';

// Styling import
import './EpisodeTile.scss';


const EpisodeTile = ({id, date, name}) => (
    <div className="episode-tile">
        <Info
            id={id}
            date={date}
            name={name}
        />
    </div>
);

export default EpisodeTile;
