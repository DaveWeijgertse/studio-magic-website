import React from 'react';

// Formatters import
import formatDate from 'appUtils/formatters/formatDate';



const AiringDate = ({date}) => (
    <div className="episode-tile-info-airing-date">
        {formatDate(date)}
    </div>
);

export default AiringDate;
