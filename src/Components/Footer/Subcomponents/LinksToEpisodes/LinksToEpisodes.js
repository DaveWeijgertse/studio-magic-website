import React from 'react';
import i18n from 'i18n-react';

const LinksToEpisodes = () => (
    <div>
        <div className="footer-header">
            {i18n.translate('episode.plural')}
        </div>
    </div>
);

export default LinksToEpisodes;
