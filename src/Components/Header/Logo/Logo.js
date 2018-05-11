import React from 'react';
import { Link } from 'react-router-dom';

import {
    ROUTE_ROOT,
} from 'appUtils/routes/paths';

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
                <Link to={ROUTE_ROOT}>
                    <img
                        className="logo studio"
                        alt="Studio"
                        src={logoStudio}
                    />
                    <div className="logo emblem">
                        <img
                            alt="Emblem"
                            src={logoEmblem}
                        />
                    </div>
                    <img
                        className="logo magic"
                        alt="Magic"
                        src={logoMagic}
                    />
                </Link>
            </div>
        );
    }
}

export default Logo;
