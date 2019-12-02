import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './pages/Home';

const DashboardRoutes = ({ match }) => {
  const { path: basePath } = match;
  return (
    <Switch>
      <Route path={basePath} exact component={Home} />
      <Redirect from={`${basePath}/*`} to={`${basePath}`} />
    </Switch>
  );
};

DashboardRoutes.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string.isRequired,
  }).isRequired,
};

export default DashboardRoutes;
