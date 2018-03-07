import React from 'react';
import i18n from 'i18n-react';

// Styling imports
import './LatestEpisodeText.scss';


const LatestEpisodeText = () => (
    <div className="latest-episode-text">
        <div className="text">
            {i18n.translate('episode.latest')}
        </div>
    </div>
);

export default LatestEpisodeText;
