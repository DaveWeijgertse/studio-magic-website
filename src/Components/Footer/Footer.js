import React from 'react';

// Subcomponent imports
import LinksToEpisodes from './Subcomponents/LinksToEpisodes';
// Styling import
import './Footer.scss';


const Footer = () => (
    <div className="footer-container">
        <div className="footer-page-container">
            <LinksToEpisodes />
        </div>
    </div>
);

export default Footer;
