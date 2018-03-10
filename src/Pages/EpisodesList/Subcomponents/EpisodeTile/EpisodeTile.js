import React from 'react';

// Subcomponent imports
import Description from './Subcomponents/Description';
import Info from './Subcomponents/Info';
import PlayButton from './Subcomponents/PlayButton';

// Styling import
import './EpisodeTile.scss';


const EpisodeTile = ({id, date, name, description, url}) => (
    <div className="episode-tile">
        <Info
            id={id}
            date={date}
            name={name}
        />
        <Description description={description} />
        <PlayButton url={url} />
    </div>
);

export default EpisodeTile;
