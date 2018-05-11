import React from 'react';
import i18n from 'i18n-react';

// Styling imports
import './PayOffText.scss';

const PayOffText = () => (
    <div className="pay-off-text-container">
        <div>{i18n.translate('pay-off')}</div>
    </div>
);

export default PayOffText;
