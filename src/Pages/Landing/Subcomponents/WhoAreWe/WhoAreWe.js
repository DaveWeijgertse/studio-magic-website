import React from 'react';

import {
    ARJAN_ANG,
    DAVE_WEIJGERTSE,
    JEROEN_KOSTER,
} from 'appUtils/constants/persons';

// Subcomponent imports
import PersonTile from './Subcomponents/PersonTile';

// Styling import
import './WhoAreWe.scss';


const WhoAreWe = ({staff}) => (
    <div className="who-are-we-container">
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
