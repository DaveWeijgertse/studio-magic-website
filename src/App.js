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
import HeaderBar from './Components/Header/HeaderBar';

// Styling imports
import 'bootstrap';
import './App.scss';


class App extends React.Component {
    componentWillMount() {
        i18n.setTexts(NL);
    }

    render() {
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
            </div>
        );
    }
}

export default App;
