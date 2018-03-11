import React from 'react';

// Styling import
import './PersonTile.scss';


const PersonTile = ({data}) => {
    const shortName    = data.info.name.short;

    return (
        <div className="person-tile-container">
            <div className="person-name">
                {shortName}
            </div>
        </div>
    );
}

export default PersonTile;
