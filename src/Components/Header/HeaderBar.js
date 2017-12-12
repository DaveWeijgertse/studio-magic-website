import React from 'react';

import './HeaderBar.scss';
import logo from './logo.png';

class HeaderBar extends React.Component {
    render() {
        return (
            <div className="header-bar">
                <img
                    className="logo"
                    alt="Studio Magic"
                    src={logo}
                />
            </div>
        )
    }
}

export default HeaderBar;
