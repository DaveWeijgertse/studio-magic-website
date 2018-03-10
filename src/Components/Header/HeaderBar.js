import React from 'react';

// Subcomponent imports
import Logo from './Subcomponents/Logo';
import Navigation from './Subcomponents/Navigation';
import SocialMediaButtons from './Subcomponents/SocialMediaButtons';

// Styling import
import './HeaderBar.scss';


class HeaderBar extends React.Component {
    render() {
        return (
            <div className="header-bar">
                <Logo />
                <SocialMediaButtons />
                <Navigation />
            </div>
        )
    }
}

export default HeaderBar;
