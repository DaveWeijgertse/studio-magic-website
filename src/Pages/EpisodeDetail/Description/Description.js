import React from 'react';

// Styling import
import './Description.scss';

const Description = ({ description }) => (
    <div className="episode-detail-container-description">
        {description.map((descriptionPart, i) => {
            return (
                <div key={i} className="description-part">
                    {descriptionPart}
                </div>
            );
        })}
    </div>
);

export default Description;
