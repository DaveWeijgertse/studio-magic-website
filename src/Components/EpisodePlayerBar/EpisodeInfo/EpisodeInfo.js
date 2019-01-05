import React from 'react';
import i18n from 'i18n-react';

// Utils import
import formatEpisodeNumber from 'utils/formatters/formatEpisodeNumber';

// Styling imports
import './EpisodeInfo.scss';

const EpisodeInfo = ({ id, name }) => (
    <div className="episode-info">
        <div className="episode-info-number">{i18n.translate('episode.singular') + ' ' + formatEpisodeNumber(id)}:</div>
        <div className="episode-info-name">{name}</div>
    </div>
);

export default EpisodeInfo;
