import React from 'react';

// Util imports
import getSocialMediaHref from 'appUtils/helpers/getSocialMediaHref';



const SocialMediaButton = ({type}) => (
    <a
        className="footer-social-media-button"
        href={getSocialMediaHref(type)}
        target="_blank"
    />
);

export default SocialMediaButton;
