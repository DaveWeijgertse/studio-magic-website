import React from 'react';
import i18n from 'i18n-react';

// Subcomponent import
import ContactButton from './ContactButton';

// Styling import
import './Contact.scss';

const Contact = () => (
    <div className="contact-container">
        <div className="contact-page-container">
            <h1>{i18n.translate('contact.title')}</h1>
            <div className="contact-links">
                <div className="contact-links-text">{i18n.translate('contact.via')}</div>
                <div className="contact-links-email">{i18n.translate('contact.email')}</div>
                <div className="contact-links-divider">{i18n.translate('or').toLowerCase()}</div>
                <div className="contact-links-social">
                    <ContactButton type="facebook" />
                    <ContactButton type="twitter" />
                </div>
            </div>
        </div>
    </div>
);

export default Contact;
