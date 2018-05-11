import React from 'react';
import i18n from 'i18n-react';
import { Link } from 'react-router-dom';

import { ROUTE_ROOT, ROUTE_EPISODES_LIST } from 'appUtils/routes/paths';

// Library imports
import { slide as Menu } from 'react-burger-menu';

// Subcomponent imports
import SocialMediaButton from '../Header/SocialMediaButtons/SocialMediaButton';

// Styling import
import './MobileNavigationMenu.scss';

class MobileNavigationMenu extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
        };

        this.onClickItem = this.onClickItem.bind(this);
    }

    onClickItem() {
        this.setState({
            isOpen: false,
        });
    }

    render() {
        const {
            onClickItem,
            state: { isOpen },
        } = this;

        return (
            <div className="mobile-navigation-menu-container">
                <Menu right width={225} isOpen={isOpen}>
                    <div onClick={onClickItem}>
                        <Link to={ROUTE_ROOT}>{i18n.translate('home')}</Link>
                    </div>
                    <div onClick={onClickItem}>
                        <Link to={ROUTE_EPISODES_LIST}>{i18n.translate('episode.plural')}</Link>
                    </div>
                    <div className="social-media-title">{i18n.translate('social-media')}</div>
                    <SocialMediaButton type="facebook" />
                    <SocialMediaButton type="twitter" />
                </Menu>
            </div>
        );
    }
}

export default MobileNavigationMenu;
