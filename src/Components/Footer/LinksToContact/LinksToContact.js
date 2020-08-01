import React from 'react';
import i18n from 'i18n-react';

// Subcomponents import
import SocialMediaButton from './SocialMediaButton';

// Styling import
import './LinksToContact.scss';

const LinksToContact = () => (
    <div class="footer-contact">
        <div className="footer-header">{i18n.translate('contact')}</div>
        <div class="footer-contact-email">{i18n.translate('contact.email')}</div>
        <SocialMediaButton type="instagram" />
        <SocialMediaButton type="facebook" />
        <SocialMediaButton type="twitter" />
        <SocialMediaButton type="linkedin" />
    </div>
);

export default LinksToContact;
