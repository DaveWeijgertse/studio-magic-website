import React from 'react';
import i18n from 'i18n-react';

// Subcomponents import
import SocialMediaButton from './Subcomponents/SocialMediaButton';


const LinksToSocialMedia = () => (
    <div>
        <div className="footer-header">
            {i18n.translate('social-media')}
        </div>
        <SocialMediaButton type="facebook" />
        <SocialMediaButton type="twitter" />
    </div>
);

export default LinksToSocialMedia;
