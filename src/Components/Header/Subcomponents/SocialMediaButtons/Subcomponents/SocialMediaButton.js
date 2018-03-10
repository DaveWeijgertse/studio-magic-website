import React from 'react';

// Util imports
import getSocialMediaHref from '../utils/getSocialMediaHref';

// Styling import
import './SocialMediaButton.scss';


class SocialMediaButton extends React.Component {
    render() {
        const { type } = this.props;

        return (
            <a
                className={"social-media-button " + type}
                href={getSocialMediaHref(type)}
            >
            </a>
        );
    }
}

export default SocialMediaButton;
