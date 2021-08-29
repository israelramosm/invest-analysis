import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import Dashboard from '../Dashboard/Dashboard';

const Main = ({ match }) => (
  <div>
    <div>Main</div>
    <Route path={`${match.url}/dashboard`}>
      <Dashboard />
    </Route>
  </div>
);

Main.propTypes = {
  match: PropTypes.shape({ url: PropTypes.string }),
};

Main.defaultProps = {
  match: {},
};

export default Main;
