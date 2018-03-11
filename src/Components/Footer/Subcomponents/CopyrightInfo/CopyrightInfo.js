import React from 'react';
import i18n from 'i18n-react';

// Styling import
import './CopyrightInfo.scss';


const CopyrightInfo = () => (
    <div className="copyright-info-container">
        {i18n.translate('copyright')} {i18n.translate('studio-magic')}
    </div>
);

export default CopyrightInfo;
