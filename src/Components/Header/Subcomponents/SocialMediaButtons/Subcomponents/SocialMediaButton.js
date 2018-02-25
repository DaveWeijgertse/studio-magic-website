import React from 'react';

// Util imports
import getSocialMediaHref from '../utils/getSocialMediaHref';
import getSocialMediaIcon from '../utils/getSocialMediaIcon';

// Styling import
import './SocialMediaButton.scss';


class SocialMediaButton extends React.Component {
    render() {
        const { type } = this.props;

        return (
            <a className={"social-media-button " + type}
               href={getSocialMediaHref(type)}
            >
                <img src={getSocialMediaIcon(type)} />
            </a>
        );
    }
}

export default SocialMediaButton;
