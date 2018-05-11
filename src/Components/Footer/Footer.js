import React from 'react';

// Subcomponent imports
import CopyrightInfo from './CopyrightInfo';
import LinksToPodcastPages from './LinksToPodcastPages';
import LinksToSocialMedia from './LinksToSocialMedia';
import SiteCredits from './SiteCredits';

// Styling import
import './Footer.scss';

const Footer = () => (
    <div className="footer-container">
        <div className="footer-page-container">
            <LinksToPodcastPages />
            <LinksToSocialMedia />
            <div className="copyright-and-site-credits-container">
                <CopyrightInfo />
                <SiteCredits />
            </div>
        </div>
    </div>
);

export default Footer;
