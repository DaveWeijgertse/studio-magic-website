import React from 'react';
import i18n from 'i18n-react';

// Formatter import
import formatEpisodeNumber from 'appUtils/formatters/formatEpisodeNumber';

// Styling import
import './EpisodeNumber.scss';

const EpisodeNumber = ({ number }) => (
    <div className="episode-tile-info-episode-number">
        <div className="episode-number-label">{i18n.translate('episode.singular') + formatEpisodeNumber(number)}</div>
    </div>
);

export default EpisodeNumber;
