import React from 'react';

// Util imports
import getSocialMediaHref from 'appUtils/helpers/getSocialMediaHref';

// Styling import
import './ContactButton.scss';


const ContactButton = ({type}) => (
    <a
        className={"contact-button " + type}
        href={getSocialMediaHref(type)}
        target="_blank"
    />
);

export default ContactButton;
