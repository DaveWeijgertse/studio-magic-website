import React from 'react';
import i18n from 'i18n-react';
import { Link } from 'react-router-dom';

import {
    ROUTE_EPISODES_LIST,
} from 'appUtils/routes/paths';

// Library imports
import { slide as Menu } from 'react-burger-menu';

// Styling import
import './MobileNavigationMenu.scss';


const MobileNavigationMenu = () => (
    <div className="mobile-navigation-menu-container">
        <Menu
            right
            width={225}
        >
            <Link to={ROUTE_EPISODES_LIST}>
                {i18n.translate('episode.plural')}
            </Link>
        </Menu>
    </div>
);

export default MobileNavigationMenu;
