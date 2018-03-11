import React from 'react';

// Util imports
import getSocialMediaHref from 'appUtils/helpers/getSocialMediaHref';



const ContactButton = ({type}) => (
    <a
        href={getSocialMediaHref(type)}
        target="_blank"
    />
);

export default ContactButton;
