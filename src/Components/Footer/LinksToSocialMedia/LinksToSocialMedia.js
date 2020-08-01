import React from 'react';
import i18n from 'i18n-react';

// Subcomponents import
import SocialMediaButton from './SocialMediaButton';

// Styling import
import './LinksToSocialMedia.scss';

const LinksToSocialMedia = () => (
    <div class="footer-links-to-social-media">
        <div className="footer-header">{i18n.translate('social-media')}</div>
        <div class="footer-links-to-social-media-email">{i18n.translate('contact.email')}</div>
        <SocialMediaButton type="instagram" />
        <SocialMediaButton type="facebook" />
        <SocialMediaButton type="twitter" />
        <SocialMediaButton type="linkedin" />
    </div>
);

export default LinksToSocialMedia;
