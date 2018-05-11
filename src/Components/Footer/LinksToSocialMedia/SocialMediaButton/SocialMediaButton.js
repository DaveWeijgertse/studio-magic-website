import React from 'react';

// Util imports
import getSocialMediaHref from 'appUtils/helpers/getSocialMediaHref';

// Styling import
import './SocialMediaButton.scss';

const SocialMediaButton = ({ type }) => (
    <a
        className={'footer-social-media-button ' + type}
        href={getSocialMediaHref(type)}
        rel="noopener noreferrer"
        target="_blank"
    />
);

export default SocialMediaButton;
