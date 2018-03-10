import React from 'react';
import i18n from 'i18n-react';

// Styling import
import './PlayButton.scss';


const PlayButton = ({id, playEpisodeInEpisodeBar}) => (
    <div
        className="episode-tile-play-button"
        onClick={() => playEpisodeInEpisodeBar(id)}
    >
        {i18n.translate('listen')}
    </div>
);

export default PlayButton;
