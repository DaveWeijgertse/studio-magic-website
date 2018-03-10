import React from 'react';
import i18n from 'i18n-react';

// Styling imports
import './PlayButton.scss';


const PlayButton = ({id, playEpisodeInEpisodeBar}) => (
    <div className="play-button-container">
        <div
            className="play-button"
            onClick={() => playEpisodeInEpisodeBar(id)}
        >
            {i18n.translate('listen')}
        </div>
    </div>
);

export default PlayButton;
