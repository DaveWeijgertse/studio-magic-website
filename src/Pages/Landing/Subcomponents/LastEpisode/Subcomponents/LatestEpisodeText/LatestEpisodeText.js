import React from 'react';
import i18n from 'i18n-react';

// Styling imports
import './LatestEpisodeText.scss';


const LatestEpisodeText = () => (
    <div className="latest-episode-text">
        {i18n.translate('episode.latest')}!
    </div>
);

export default LatestEpisodeText;
