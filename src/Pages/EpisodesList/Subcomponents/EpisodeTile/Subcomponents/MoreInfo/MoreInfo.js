import React from 'react';
import i18n from 'i18n-react';



const MoreInfo = ({url}) => (
    <a
        href={url}
        target="_blank"
    >
        {i18n.translate('more-info')}
    </a>
);

export default MoreInfo;
