import React from 'react';

// Styling import
import './CloseEpisodeBarButton.scss';


const CloseEpisodeBarButton = ({onCloseEpisodeBar}) => (
    <div
        className="close-episode-bar-button"
        onClick={onCloseEpisodeBar}
    />
);

export default CloseEpisodeBarButton;
