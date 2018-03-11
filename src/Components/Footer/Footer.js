import React from 'react';

// Subcomponent imports
import CopyrightInfo from './Subcomponents/CopyrightInfo';
import LinksToEpisodes from './Subcomponents/LinksToEpisodes';
import LinksToSocialMedia from './Subcomponents/LinksToSocialMedia';

// Styling import
import './Footer.scss';


const Footer = () => (
    <div className="footer-container">
        <div className="footer-page-container">
            <LinksToEpisodes />
            <LinksToSocialMedia />
        </div>
    </div>
);

export default Footer;
