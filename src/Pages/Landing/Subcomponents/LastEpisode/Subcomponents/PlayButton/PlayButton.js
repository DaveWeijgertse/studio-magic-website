import React from 'react';
import i18n from 'i18n-react';

// Styling imports
import './PlayButton.scss';


const PlayButton = ({id, playingEpisodeId, playEpisodeInEpisodeBar}) => {
    const isEpisodeCurrentlyPlaying = id === playingEpisodeId;

    return (
        <div className="play-button-container">
            <div
                className={"play-button " + (isEpisodeCurrentlyPlaying ? "stop-playing" : "start-playing")}
                onClick={() => isEpisodeCurrentlyPlaying ? onStopPlayingEpisode() : playEpisodeInEpisodeBar(id)}
            >
                {isEpisodeCurrentlyPlaying ? i18n.translate('stop-listening') : i18n.translate('listen')}
            </div>
        </div>
    );
}

export default PlayButton;
