import React from 'react';
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
        </Menu>
    </div>
);

export default MobileNavigationMenu;
