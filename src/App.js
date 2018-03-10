import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Routes import
import {
    ROUTE_ROOT,
    ROUTE_EPISODES_LIST,
} from 'appUtils/routes/paths';

// Translations import
import i18n from 'i18n-react';
import NL from './utils/translations/nl-NL.json';

// Pages imports
import PageEpisodesList from './Pages/EpisodesList/PageEpisodesList';
import PageLanding from './Pages/Landing/PageLanding';

// Component imports
import EpisodePlayerBar from './Components/EpisodePlayerBar';
import HeaderBar from './Components/Header/HeaderBar';

// Styling imports
import 'bootstrap';
import './App.scss';


const renderMergedProps = (component, ...rest) => {
    const finalProps = Object.assign({}, ...rest);
    return (
        React.createElement(component, finalProps)
    );
}

const PropsRoute = ({ component, ...rest }) => {
    return (
        <Route {...rest} render={routeProps => {
            return renderMergedProps(component, routeProps, rest);
        }}/>
    );
}

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            playingEpisodeId: null
        }

        this.playEpisodeInEpisodeBar = this.playEpisodeInEpisodeBar.bind(this);
    }

    componentWillMount() {
        i18n.setTexts(NL);
    }

    playEpisodeInEpisodeBar(playingEpisodeId) {
        this.setState({
            playingEpisodeId
        });
    }

    render() {
        const {
            playingEpisodeId,
        } = this.state;

        return (
            <div className="App">
                <HeaderBar />
                <div className="container">
                    <Switch>
                        <Route
                            exact
                            path={ROUTE_ROOT}
                            component={PageLanding}
                        />
                        <Route
                            path={ROUTE_EPISODES_LIST}
                            component={PageEpisodesList}
                        />
                    </Switch>
                </div>
                <EpisodePlayerBar id={playingEpisodeId} />
            </div>
        );
    }
}

export default App;
