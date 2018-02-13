import React from 'react';

// Subcomponent imports
import Logo from './Subcomponents/Logo';

// Styling import
import './HeaderBar.scss';


class HeaderBar extends React.Component {
    render() {
        return (
            <div className="header-bar">
                <Logo />
            </div>
        )
    }
}

export default HeaderBar;
