import React from 'react';



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
