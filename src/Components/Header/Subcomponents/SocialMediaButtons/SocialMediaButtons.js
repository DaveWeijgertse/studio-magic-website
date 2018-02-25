import React from 'react';

// Subcomponent imports
import SocialMediaButton from './Subcomponents/SocialMediaButton';

// Styling imports
import './SocialMediaButtons.scss';


class SocialMediaButtons extends React.Component {
    render() {
        return (
            <div className="social-media-button-container">
                <SocialMediaButton type="itunes" />
            </div>
        );
    }
}

export default SocialMediaButtons;
