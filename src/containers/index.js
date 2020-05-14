import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BrowseCourses from './browse-courses';
import NavigationComponent from '../components/navigation';
import NoMatch from './no-match';

import data from './../static';

const RouteApp = () => {

    const navbarItems = data && data.navbarItem,
        items = navbarItems;

    return (
        <Router>
            <React.Fragment>
                <NavigationComponent items={items} />
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
