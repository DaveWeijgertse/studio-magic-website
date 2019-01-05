import React from 'react';

// Formatters import
import formatDate from 'utils/formatters/formatDate';

// Styling import
import './EpisodeDate.scss';

const EpisodeDate = ({ date }) => <div className="episode-date">{formatDate(date)}</div>;

export default EpisodeDate;
