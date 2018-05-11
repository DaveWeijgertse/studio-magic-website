import React from 'react';
import i18n from 'i18n-react';

import {
    ARJAN_ANG,
    DAVE_WEIJGERTSE,
    JEROEN_KOSTER,
} from 'appUtils/constants/persons';

// Subcomponent imports
import PersonTile from './PersonTile';

// Styling import
import './WhoAreWe.scss';


const WhoAreWe = ({staff}) => (
    <div className="who-are-we-container">
        <h1>{i18n.translate('who-are-we.title')}</h1>
        <div className="person-tiles">
            <PersonTile
                person={JEROEN_KOSTER}
                data={staff[JEROEN_KOSTER]}
            />
            <PersonTile
                person={ARJAN_ANG}
                data={staff[ARJAN_ANG]}
            />
            <PersonTile
                person={DAVE_WEIJGERTSE}
                data={staff[DAVE_WEIJGERTSE]}
            />
        </div>
    </div>
);

export default WhoAreWe;
