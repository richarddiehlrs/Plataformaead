import React, { useState, useMemo } from 'react';
import { Switch } from 'react-router-dom';

import Header from '../components/mols/Header';

// Pages
import Landing from '../pages/Landing';
import Cursos from '../pages/Cursos';
import AoVivo from '../pages/AoVivo';

import Route from './Route';

const Routes: React.FC = () => {
  const [tab, setTab] = useState('cursos');

  const HeaderTabs = useMemo(() => [
    { key: 'cursos', value: 'Cursos' },
    { key: 'aovivo', value: 'Aulas ao vivo' },
    { key: 'gravadas', value: 'Aulas gravadas' },
    { key: 'plantao', value: 'Plantão de dúvidas' },
    { key: 'mensagens', value: 'Mensagens' },
  ], []);

  return (
    <>
      <Header actualTab={tab} tabs={HeaderTabs} changeTab={setTab} />
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/cursos" component={Cursos} isPrivate />
        <Route path="/aovivo" component={AoVivo} isPrivate />
      </Switch>
    </>
  );
};

export default Routes;
