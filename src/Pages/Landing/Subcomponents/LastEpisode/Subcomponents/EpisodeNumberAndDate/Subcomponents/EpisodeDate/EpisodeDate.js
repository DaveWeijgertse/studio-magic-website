import React from 'react';

// Formatters import
import formatDate from 'appUtils/formatters/formatDate';

// Styling import
import './EpisodeDate.scss';


const EpisodeDate = ({date}) => (
    <div className="episode-date">
        {formatDate(date)}
    </div>
);

export default EpisodeDate;
