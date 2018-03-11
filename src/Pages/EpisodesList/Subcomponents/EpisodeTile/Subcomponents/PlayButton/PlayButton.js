import React from 'react';
import i18n from 'i18n-react';

// Styling import
import './PlayButton.scss';


const PlayButton = ({id, playingEpisodeId, playEpisodeInEpisodeBar}) => {
    const isEpisodeCurrentlyPlaying = id === playingEpisodeId;

    return (
        <div
            className={"episode-tile-play-button " + (isEpisodeCurrentlyPlaying ? "stop-playing" : "start-playing")}
            onClick={() => isEpisodeCurrentlyPlaying ? onStopPlayingEpisode(id) : playEpisodeInEpisodeBar(id)}
        >
            {isEpisodeCurrentlyPlaying ? i18n.translate('stop-listening') : i18n.translate('listen')}
        </div>
    );
}

export default PlayButton;
