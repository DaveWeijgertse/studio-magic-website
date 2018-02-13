import React from 'react';

import './Logo.scss';
import logo from './logo.png';


class Logo extends React.Component {
    render() {
        return (
            <img
                className="logo"
                alt="Studio Magic"
                src={logo}
            />
        );
    }
}

export default Logo;
