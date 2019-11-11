import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import LoginComponent from './boxoffice/login.component';
import DashboarrdComponent from './boxoffice/dashboard.component';
import MovieComponent from './boxoffice/movie.component';

const routing = (
    <Router>
        <Route exact path="/" component={LoginComponent}></Route>
        <Route path="/dashboard" component={DashboarrdComponent}></Route>
        <Route path="/movie/:id" component={MovieComponent}></Route>
    </Router>
);

export default routing;