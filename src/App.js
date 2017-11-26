import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import PageLanding from './Pages/Landing/PageLanding';

import 'bootstrap';
import './App.scss';


class App extends React.Component {
    render() {
        return (
            <div className="App">
                <div className="container">
                    <Router>
                        <Route path="/"
                               component={PageLanding}
                        />
                    </Router>
                </div>
            </div>
        );
    }
}

export default App;
