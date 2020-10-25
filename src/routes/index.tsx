import React from 'react';
import { Switch } from 'react-router-dom';

// Pages
import Landing from '../pages/Landing';
import Cursos from '../pages/Cursos';
import AoVivo from '../pages/AoVivo';

import Route from './Route';

const routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Landing} />
    <Route path="/cursos" component={Cursos} isPrivate />
    <Route path="/aovivo" component={AoVivo} isPrivate />
  </Switch>
);

export default routes;
