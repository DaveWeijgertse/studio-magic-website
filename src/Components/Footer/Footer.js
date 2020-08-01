import React from 'react';

// Subcomponent imports
import CopyrightInfo from './CopyrightInfo';
import LinksToPodcastPages from './LinksToPodcastPages';
import LinksToContact from './LinksToContact';
import SiteCredits from './SiteCredits';

// Styling import
import './Footer.scss';

const Footer = () => (
    <div className="footer-container">
        <div className="footer-page-container">
            <LinksToPodcastPages />
            <LinksToContact />
            <div className="copyright-and-site-credits-container">
                <CopyrightInfo />
                <SiteCredits />
            </div>
        </div>
    </div>
);

export default Footer;
