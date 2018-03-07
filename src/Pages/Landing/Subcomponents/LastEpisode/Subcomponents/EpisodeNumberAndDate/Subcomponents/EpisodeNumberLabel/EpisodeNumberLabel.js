import React from 'react';
import i18n from 'i18n-react';



const EpisodeNumberLabel = () => (
    <div className="episode-number-label">
        {i18n.translate('episode.singular')} #009
    </div>
);

export default EpisodeNumberLabel;
