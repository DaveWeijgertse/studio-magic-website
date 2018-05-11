import React from 'react';

// Util imports
import getSocialMediaHref from 'appUtils/helpers/getSocialMediaHref';

// Styling import
import './SocialMediaButton.scss';

class SocialMediaButton extends React.Component {
    render() {
        const { type } = this.props;

        return (
            <a
                className={'social-media-button ' + type}
                href={getSocialMediaHref(type)}
                rel="noopener noreferrer"
                target="_blank"
            />
        );
    }
}

export default SocialMediaButton;
