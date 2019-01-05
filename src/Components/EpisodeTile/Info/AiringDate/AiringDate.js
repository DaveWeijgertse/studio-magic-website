import React from 'react';

// Formatters import
import formatDate from 'utils/formatters/formatDate';

// Styling imports
import './AiringDate.scss';

const AiringDate = ({ date }) => <div className="episode-tile-info-airing-date">{formatDate(date)}</div>;

export default AiringDate;
