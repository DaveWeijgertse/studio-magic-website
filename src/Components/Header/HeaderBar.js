import React from 'react';

// Subcomponent imports
import Logo from './Logo';
import Navigation from './Navigation';
import PayOffText from './PayOffText';
import SocialMediaButtons from './SocialMediaButtons';

// Styling import
import './HeaderBar.scss';

class HeaderBar extends React.Component {
    render() {
        return (
            <div className="header-bar-container">
                <div className="header-bar">
                    <Logo />
                    <div className="social-navigation-container">
                        <Navigation />
                        <SocialMediaButtons />
                    </div>
                </div>
                <PayOffText />
            </div>
        );
    }
}

export default HeaderBar;
