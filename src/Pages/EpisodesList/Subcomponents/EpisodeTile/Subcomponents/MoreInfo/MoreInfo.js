import React from 'react';
import i18n from 'i18n-react';

// Styling import
import './MoreInfo.scss';


const MoreInfo = ({url}) => (
    <a
        className="episode-more-info"
        href={url}
        target="_blank"
    >
        {i18n.translate('more-info')}
    </a>
);

export default MoreInfo;
