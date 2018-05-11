import React from 'react';

// Styling import
import './PersonTile.scss';


const PersonTile = ({person, data}) => {
    const shortName    = data.info.name.short;
    const introduction = data.whoAmI.introduction;

    return (
        <div className="person-tile-container">
            <div className="image-container">
                <div className={"image " + person} />
            </div>
            <div className="person-name">
                {shortName}
            </div>
            <div className="person-introduction">
                {introduction}
            </div>
        </div>
    );
}

export default PersonTile;
