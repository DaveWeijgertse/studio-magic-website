import React from 'react';
import i18n from 'i18n-react';

// Formatter import
import formatEpisodeNumber from './formatters/formatEpisodeNumber';

// Styling import
import './EpisodeNumberLabel.scss';


const EpisodeNumberLabel = ({number}) => (
    <div className="episode-number-label">
        {i18n.translate('episode.singular') + formatEpisodeNumber(number)}
    </div>
);

export default EpisodeNumberLabel;
