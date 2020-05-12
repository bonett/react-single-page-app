import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import Home from './home';

import Navigation from '../components/navigation';
import NoMatch from './no-match';

function RouteApp() {
    return (
        <Router>
            <div>
                <Navigation />
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="*">
                        <NoMatch />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default RouteApp;
