import React from 'react';
import { Link } from 'react-router-dom';

// Styling import
import './Description.scss';

const Description = ({ episodeId, description }) => (
    <div className="episode-detail-container-description">
        {description.map((descriptionPart, i) => {
            return (
                <div key={i} className="description-part">
                    {descriptionPart}
                </div>
            );
        })}
        {/* @todo: add support for hyperlinks and markdown formatting in the description of the episodeData */}
        {episodeId === '12' && (
            <div>
                <strong>Winactie Dominaria</strong>
                <div>
                    <span>Dankzij de sponsor van deze aflevering, DGN* (</span>
                    <a href="https://dgngroep.homerun.co" target="_blank" rel="noopener noreferrer">
                        website
                    </a>
                    <span>
                        ), hebben we een heuse boosterbox Dominaria om te verloten onder onze luisteraars! Meedoen aan
                        deze verloting is gratis en kan heel eenvoudig, op twee verschillende manieren:
                    </span>
                </div>
                <br />
                <i>Manier A: via Facebook</i>
                <div>
                    <span>1. </span>
                    <a href="https://facebook.com/studiomagicnl" target="_blank" rel="noopener noreferrer">
                        Like Studio Magic op Facebook
                    </a>
                </div>
                <div>
                    <span>2. </span>
                    <a
                        href="https://www.facebook.com/studiomagicnl/posts/196797647633979"
                        target="_blank"
                        rel="noopener noreferrer">
                        Deel onze post over deze aflevering als openbaar bericht
                    </a>
                </div>
                <br />
                <i>Manier B: via Twitter</i>
                <div>
                    <span>1. </span>
                    <a href="https://twitter.com/studiomagicnl" target="_blank" rel="noopener noreferrer">
                        Volg Studio Magic op Twitter
                    </a>
                </div>
                <div>
                    <span>2. </span>
                    <a
                        href="https://twitter.com/StudioMagicNL/status/1001907003831341058"
                        target="_blank"
                        rel="noopener noreferrer">
                        Retweet onze tweet over deze aflevering
                    </a>
                </div>
                <br />
                <div>
                    Zo simpel is het. Wij verloten de box onder iedereen die de stappen van manier A en / of manier B
                    heeft voltooid. Heb je de stappen van BEIDE manieren voltooid? Dan maak je DUBBEL ZO VEEL kans!
                </div>
                <br />
                <div>
                    Meedoen kan tot en met vrijdag 15 juni. De winnaar maken we bekend in een toekomstige aflevering van
                    Studio Magic. Over de uitslag kan niet worden gecorrespondeerd.
                </div>
                <br />
                <div>
                    <span>*: Trouwens, bij sponsor DGN zoeken ze nog IT-developers. Geïnteresseerd? </span>
                    <a href="https://dgngroep.homerun.co" target="_blank" rel="noopener noreferrer">
                        Klik hier om naar DGN's recruitment pagina te gaan
                    </a>.
                </div>
            </div>
        )}
        {episodeId === '13' && (
            <div>
                Oh en trouwens, wil jij een <strong>boosterbox Dominaria</strong> winnen? Luister en{' '}
                <Link to="/aflevering/012-cube-101-een-introductie-tot-het-format">
                    lees bij onze vorige aflevering hoe je kans maakt
                </Link>.
            </div>
        )}
    </div>
);

export default Description;
