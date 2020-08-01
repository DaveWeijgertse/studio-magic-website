import React from 'react';
import i18n from 'i18n-react';

// Subcomponents import
import SocialMediaButton from './SocialMediaButton';

const LinksToSocialMedia = () => (
    <div>
        <div className="footer-header">{i18n.translate('social-media')}</div>
        <SocialMediaButton type="instagram" />
        <SocialMediaButton type="facebook" />
        <SocialMediaButton type="twitter" />
        <SocialMediaButton type="linkedin" />
    </div>
);

export default LinksToSocialMedia;
