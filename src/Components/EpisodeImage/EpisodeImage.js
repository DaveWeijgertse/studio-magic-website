import React from 'react';

// Styling imports
import './EpisodeImage.scss';

const EpisodeImage = ({ episodeNumber }) => <div className={'episode-image episode-' + episodeNumber} />;

export default EpisodeImage;
