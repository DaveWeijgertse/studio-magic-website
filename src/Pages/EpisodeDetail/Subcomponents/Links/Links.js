import React from 'react';
import i18n from 'i18n-react';

// Styling import
import './Links.scss';


const Links = ({ links }) => (
    <div className="episode-detail-container-links">
        <h1>{i18n.translate('links.title')}</h1>
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
