import React from 'react';

// Util imports
import getSocialMediaHref from 'utils/helpers/getSocialMediaHref';

// Styling import
import './SocialMediaButton.scss';

const SocialMediaButton = ({ type }) => (
    <a
        className={'footer-social-media-button ' + type}
        href={getSocialMediaHref(type)}
        rel="noopener noreferrer"
        target="_blank">
        <div className="icon" />
    </a>
);

export default SocialMediaButton;
