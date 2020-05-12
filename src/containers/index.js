import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import BrowseCourses from './browse-courses';

import Navigation from '../components/navigation';
import NoMatch from './no-match';

function RouteApp() {
    return (
        <Router>
            <React.Fragment>
                <Navigation />
                <Switch>
                    <Route exact path="/" redirect="/browse-courses">
                        <BrowseCourses />
                    </Route>
                    <Route path="*">
                        <NoMatch />
                    </Route>
                </Switch>
            </React.Fragment>
        </Router>
    );
}

export default RouteApp;
