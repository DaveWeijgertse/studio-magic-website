import React from 'react';

// Styling import
import './Description.scss';


const Description = ({description}) => (
    <div className="episode-tile-description">
        {description}
    </div>
);

export default Description;
