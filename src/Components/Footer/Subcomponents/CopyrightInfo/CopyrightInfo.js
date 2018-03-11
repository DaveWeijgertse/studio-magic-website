import React from 'react';
import i18n from 'i18n-react';


const CopyrightInfo = () => (
    <div>
        <div>{i18n.translate('copyright')}</div>
        <div>{i18n.translate('studio-magic')}</div>
    </div>
);

export default CopyrightInfo;
