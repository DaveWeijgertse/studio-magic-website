import React from 'react';

// Subcomponent imports
import Description from './Subcomponents/Description';
import Info from './Subcomponents/Info';

// Styling import
import './EpisodeTile.scss';


const EpisodeTile = ({id, date, name, description}) => (
    <div className="episode-tile">
        <Info
            id={id}
            date={date}
            name={name}
        />
        <Description description={description} />
    </div>
);

export default EpisodeTile;
