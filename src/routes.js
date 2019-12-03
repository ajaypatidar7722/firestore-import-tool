import React from 'react';
import {
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import Dashboard from './modules/dashboard/dashboard.routes';
import List from './modules/list/list.routes';

const routes = (
  <Switch>
    <Route path="/dashboard" component={Dashboard} />
    <Route path="/list" component={List} />
    <Redirect from="*" to="/dashboard" />
  </Switch>
);

export default routes;
