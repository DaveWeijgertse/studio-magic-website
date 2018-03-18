import React from 'react';
import i18n from 'i18n-react';

// Styling import
import './Credits.scss';

// @todo: move the different credit parts to seperate subcomponent files
const Credits = ({ credits }) => {
    const {
        editing,
        presentation,
    } = credits;

    return (
        <div className="episode-detail-container-credits">
            <h1>{i18n.translate('credits.title')}</h1>
            <div className="credit-container">
                <div className="credits-type">
                    {i18n.translate('credits.editing')}
                </div>
                <div className="credits-names">
                    {editing}
                </div>
            </div>
            <div className="credit-container">
                <div className="credits-type">
                    {i18n.translate('credits.presentation')}
                </div>
                <div className="credits-names">
                    {presentation}
                </div>
            </div>
            <div className="credit-container">
                <div className="credits-type">
                    {i18n.translate('credits.music')}
                </div>
                <div className="credits-names">
                    Surf Shimmy - Kevin MacLeod (incompetech.com).
                    <a
                        className="creative-commons-link"
                        href="http://creativecommons.org/licenses/by/3.0/"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        Licensed under Creative Commons: By Attribution 3.0 License.
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Credits;
