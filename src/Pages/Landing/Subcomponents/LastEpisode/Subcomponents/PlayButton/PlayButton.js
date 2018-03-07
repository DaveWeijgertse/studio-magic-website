import React from 'react';
import i18n from 'i18n-react';

// Styling imports
import './PlayButton.scss';


const PlayButton = ({url}) => (
    <a
        className="play-button"
        href={url}
        target="_blank"
    >
        {i18n.translate('listen')}
    </a>
);

export default PlayButton;
