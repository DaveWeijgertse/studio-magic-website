import React from 'react';
import i18n from 'i18n-react';

// Subcomponent import
import MoreInfo from './Subcomponents/MoreInfo';

// Styling imports
import './PlayButtonAndMoreInfo.scss';

// @todo: move the <PlayButton> to its own seperate file
const PlayButtonAndMoreInfo = ({id, playingEpisodeId, playEpisodeInEpisodeBar, onStopPlayingEpisode}) => {
    const isEpisodeCurrentlyPlaying = id === playingEpisodeId;

    return (
        <div className="play-button-and-more-info-container">
            <div
                className={"play-button " + (isEpisodeCurrentlyPlaying ? "stop-playing" : "start-playing")}
                onClick={() => isEpisodeCurrentlyPlaying ? onStopPlayingEpisode() : playEpisodeInEpisodeBar(id)}
            >
                {isEpisodeCurrentlyPlaying ? i18n.translate('stop-listening') : i18n.translate('listen')}
            </div>
            <MoreInfo
                id={id}
            />
        </div>
    );
}

export default PlayButtonAndMoreInfo;
