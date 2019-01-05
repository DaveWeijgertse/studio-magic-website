import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Routes import
import { ROUTE_ROOT, ROUTE_EPISODES_LIST, ROUTE_DISCLAIMER } from 'utils/routes/paths';

import { ROUTE_EPISODE_DETAIL } from 'utils/routes/episodeDetailPaths';

// Translations import
import i18n from 'i18n-react';
import NL from 'utils/translations/nl-NL.json';

// Pages imports
import PageDisclaimer from './Pages/Disclaimer/PageDisclaimer';
import PageEpisodeDetail from './Pages/EpisodeDetail/PageEpisodeDetail';
import PageEpisodesList from './Pages/EpisodesList/PageEpisodesList';
import PageLanding from './Pages/Landing/PageLanding';

// Component imports
import EpisodePlayerBar from './Components/EpisodePlayerBar';
import Footer from './Components/Footer';
import HeaderBar from './Components/Header/HeaderBar';
import MobileNavigationMenu from './Components/MobileNavigationMenu';

// Styling imports
import 'bootstrap';
import './App.scss';

const renderMergedProps = (component, ...rest) => {
    const finalProps = Object.assign({}, ...rest);
    return React.createElement(component, finalProps);
};

const PropsRoute = ({ component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={(routeProps) => {
                return renderMergedProps(component, routeProps, rest);
            }}
        />
    );
};

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            playingEpisodeId: null,
        };

        this.playEpisodeInEpisodeBar = this.playEpisodeInEpisodeBar.bind(this);
        this.onStopPlayingEpisode = this.onStopPlayingEpisode.bind(this);
    }

    componentWillMount() {
        i18n.setTexts(NL);
    }

    playEpisodeInEpisodeBar(playingEpisodeId) {
        this.setState({
            playingEpisodeId,
        });
    }

    onStopPlayingEpisode() {
        this.setState({
            playingEpisodeId: null,
        });
    }

    render() {
        const { playEpisodeInEpisodeBar, onStopPlayingEpisode } = this;

        const { playingEpisodeId } = this.state;

        return (
            <div className="App">
                <HeaderBar />
                <MobileNavigationMenu />
                <div className="container">
                    <Switch>
                        <PropsRoute
                            exact
                            path={ROUTE_ROOT}
                            component={PageLanding}
                            playingEpisodeId={playingEpisodeId}
                            playEpisodeInEpisodeBar={playEpisodeInEpisodeBar}
                            onStopPlayingEpisode={onStopPlayingEpisode}
                        />
                        <PropsRoute
                            exact
                            path={ROUTE_EPISODES_LIST}
                            component={PageEpisodesList}
                            playingEpisodeId={playingEpisodeId}
                            playEpisodeInEpisodeBar={playEpisodeInEpisodeBar}
                            onStopPlayingEpisode={onStopPlayingEpisode}
                        />
                        {Object.entries(ROUTE_EPISODE_DETAIL).map((episodePathData) => {
                            const episodeId = episodePathData[0];
                            const episodeUrl = episodePathData[1];

                            return (
                                <PropsRoute
                                    key={episodeId}
                                    path={episodeUrl}
                                    episodeId={episodeId}
                                    component={PageEpisodeDetail}
                                    playingEpisodeId={playingEpisodeId}
                                    playEpisodeInEpisodeBar={playEpisodeInEpisodeBar}
                                    onStopPlayingEpisode={onStopPlayingEpisode}
                                />
                            );
                        })}
                        <Route exact path={ROUTE_DISCLAIMER} component={PageDisclaimer} />
                    </Switch>
                </div>
                <EpisodePlayerBar id={playingEpisodeId} onStopPlayingEpisode={onStopPlayingEpisode} />
                <Footer />
            </div>
        );
    }
}

export default App;
