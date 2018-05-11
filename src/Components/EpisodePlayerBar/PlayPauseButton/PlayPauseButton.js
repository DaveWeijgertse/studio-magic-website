import React from 'react';

// Styling import
import './PlayPauseButton.scss';


const PlayPauseButton = ({isPlaying, onClick}) => (
    <div
        className={"play-pause-button " + (isPlaying ? "playing" : "paused")}
        onClick={onClick}
    />
);

export default PlayPauseButton;
