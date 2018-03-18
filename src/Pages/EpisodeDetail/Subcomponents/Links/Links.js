import React from 'react';

// Styling import
import './Links.scss';


const Links = ({ links }) => (
    <div className="episode-detail-container-links">
        <div className="links-container">
            {links.map(
                (link) => {
                    const {
                        title,
                        url,
                    } = link;

                    return (
                        <a
                            href={url}
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            {title}
                        </a>
                    );
                }
            )}
        </div>
    </div>
);

export default Links;
