import React from 'react';

// Logo imports
import logoStudio from './images/logo-studio_magic-STUDIO_wit.png';
import logoEmblem from './images/logo-studio_magic-LOGO_EMBLEEM.png';
import logoMagic from './images/logo-studio_magic-MAGIC_wit.png';

// Styling imports
import './Logo.scss';


class Logo extends React.Component {
    render() {
        return (
            <div className="logo-container">
                <img
                    className="logo studio"
                    alt="Studio"
                    src={logoStudio}
                />
                <img
                    className="logo emblem"
                    alt="Emblem"
                    src={logoEmblem}
                />
                <img
                    className="logo magic"
                    alt="Magic"
                    src={logoMagic}
                />
            </div>
        );
    }
}

export default Logo;
