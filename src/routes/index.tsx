import React from 'react';
import { Switch } from 'react-router-dom';

// Pages
import Landing from '../pages/Landing';
import Dashboard from '../pages/Dashboard';

import Route from './Route';

const routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Landing} />
    <Route path="/dashboard" component={Dashboard} isPrivate />
  </Switch>
);

export default routes;
