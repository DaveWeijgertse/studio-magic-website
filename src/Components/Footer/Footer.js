import React from 'react';

// Subcomponent imports
import CopyrightInfo from './Subcomponents/CopyrightInfo';
import LinksToPodcastPages from './Subcomponents/LinksToPodcastPages';
import LinksToSocialMedia from './Subcomponents/LinksToSocialMedia';
import SiteCredits from './Subcomponents/SiteCredits';

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
