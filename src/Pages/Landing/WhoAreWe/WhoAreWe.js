import React from 'react';
import i18n from 'i18n-react';

import { ARJAN_ANG, DAVE_WEIJGERTSE, JEROEN_KOSTER } from 'utils/constants/persons';

// Subcomponent imports
import PersonTile from './PersonTile';

// Styling import
import './WhoAreWe.scss';

const WhoAreWe = ({ staff }) => (
    <div className="who-are-we-container">
        <h1>{i18n.translate('who-are-we.title')}</h1>
        <div class="who-are-we-hosts-container">
            <div class="who-are-we-hosts-current">
                <h2>{i18n.translate('who-are-we.current-hosts')}</h2>
                <div className="person-tiles">
                    <PersonTile person={JEROEN_KOSTER} data={staff[JEROEN_KOSTER]} />
                    <PersonTile person={DAVE_WEIJGERTSE} data={staff[DAVE_WEIJGERTSE]} />
                </div>
            </div>
            <div class="who-are-we-hosts-former">
                <h2>{i18n.translate('who-are-we.former-hosts')}</h2>
                <div className="person-tiles">
                    <PersonTile person={ARJAN_ANG} data={staff[ARJAN_ANG]} />
                </div>
            </div>
        </div>
    </div>
);

export default WhoAreWe;
