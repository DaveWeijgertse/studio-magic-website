import React from 'react';
import i18n from 'i18n-react';

// Styling import
import './EpisodeNumberLabel.scss';


const EpisodeNumberLabel = ({number}) => (
    <div className="episode-number-label">
        {i18n.translate('episode.singular') + " #" + number.toString()}
    </div>
);

export default EpisodeNumberLabel;
