import React from 'react';
import i18n from 'i18n-react';

// Subcomponent import
import ContactButton from './Subcomponents/ContactButton';

// Styling import
import './Contact.scss';


const Contact = () => (
    <div className="contact-container">
        <h1>{i18n.translate('contact.title')}</h1>
    </div>
);

export default Contact;
