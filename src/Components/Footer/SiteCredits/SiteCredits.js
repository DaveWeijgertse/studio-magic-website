import React from 'react';
import i18n from 'i18n-react';

// Styling import
import './SiteCredits.scss';

const SiteCredits = () => (
    <div className="footer-site-credits-container">
        <div>{i18n.translate('site-credits')}</div>
        <a
            className="link-to-github"
            href="https://github.com/DaveWeijgertse/studio-magic-website"
            rel="noopener noreferrer"
            target="_blank"
        />
    </div>
);

export default SiteCredits;
