import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Pages imports
import PageLanding from './Pages/Landing/PageLanding';

// Component imports
import HeaderBar from './Components/Header/HeaderBar';

// Styling imports
import 'bootstrap';
import './App.scss';


class App extends React.Component {
    render() {
        return (
            <div className="App">
                <HeaderBar />
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
