import React from 'react';

// Subcomponent imports
import SocialMediaButton from './SocialMediaButton';

// Styling imports
import './SocialMediaButtons.scss';


class SocialMediaButtons extends React.Component {
    render() {
        return (
            <div className="social-media-button-container">
                <SocialMediaButton type="facebook" />
                <SocialMediaButton type="twitter" />
            </div>
        );
    }
}

export default SocialMediaButtons;
