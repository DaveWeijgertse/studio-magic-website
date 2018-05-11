import React from 'react';
import i18n from 'i18n-react';
import { Link } from 'react-router-dom';

import { ROUTE_DISCLAIMER } from 'appUtils/routes/paths';

// Styling import
import './Credits.scss';

// @todo: move the different credit parts to seperate subcomponent files
const Credits = ({ credits }) => {
    const { art, editing, extraMusic, presentation } = credits;

    return (
        <div className="episode-detail-container-credits">
            <h1>{i18n.translate('credits.title')}</h1>
            <div className="credit-container">
                <div className="credits-type">{i18n.translate('credits.editing')}</div>
                <div className="credits-names">{editing}</div>
            </div>
            <div className="credit-container">
                <div className="credits-type">{i18n.translate('credits.presentation')}</div>
                <div className="credits-names">{presentation}</div>
            </div>
            <div className="credit-container">
                <div className="credits-type">{i18n.translate('credits.music')}</div>
                <div className="credits-names">
                    <div>Surf Shimmy - Kevin MacLeod (incompetech.com)</div>
                    <div className="link creative-commons">
                        <a href="http://creativecommons.org/licenses/by/3.0/" rel="noopener noreferrer" target="_blank">
                            Licensed under Creative Commons: By Attribution 3.0 License
                        </a>
                    </div>
                    {extraMusic.length > 0
                        ? extraMusic.map((extraMusicCredit) => {
                              return <div className="extra-music-credit">{extraMusicCredit}</div>;
                          })
                        : null}
                </div>
            </div>
            <div className="credit-container">
                <div className="credits-type">{i18n.translate('credits.art.singular')}</div>
                <div className="credits-names">
                    {art.name}
                    {i18n.translate('credits.art.created-by')} {art.artist}
                    <div className="link">
                        <Link to={ROUTE_DISCLAIMER}>{i18n.translate('disclaimer')}</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Credits;
