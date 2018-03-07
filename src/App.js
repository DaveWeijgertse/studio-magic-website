import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

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
                    <Router>
                        <Switch>
                            <Route path="/"
                                component={PageLanding}
                            />
                            <Route path="/afleveringen"
                                component={PageEpisodesList}
                            />
                        </Switch>
                    </Router>
                </div>
            </div>
        );
    }
}

export default App;
