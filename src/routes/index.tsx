import React, {
  useState, useMemo,
} from 'react';
import { Switch } from 'react-router-dom';

import { useAuth } from 'hooks/auth';

import Header from 'components/Mols/Header';
import Footer from 'components/Mols/Footer';

// Pages Non Logged
import Landing from 'pages/NonLoggedPages/Landing';
// Pages Logged
import Cursos from 'pages/LoggedPages/Cursos';
import AoVivo from 'pages/LoggedPages/AoVivo';
import CategoryMovies from 'pages/LoggedPages/CategoryMovies';

import Route from './Route';

const Routes: React.FC = () => {
  const [tab, setTab] = useState('cursos');
  const { user } = useAuth();

  const HeaderTabs = useMemo(() => [
    { key: 'cursos', value: 'Cursos' },
    { key: 'aovivo', value: 'Aulas ao vivo' },
    { key: 'gravadas', value: 'Aulas gravadas' },
    { key: 'plantao', value: 'Plantão de dúvidas' },
    { key: 'mensagens', value: 'Mensagens' },
  ], []);

  return (
    <>
      {user && <Header actualTab={tab} tabs={HeaderTabs} changeTab={setTab} />}
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/cursos" component={Cursos} isPrivate />
        <Route path="/aovivo" component={AoVivo} isPrivate />
        <Route path="/movies/:categoryId/:categoryName" component={CategoryMovies} isPrivate />
      </Switch>

      {user && <Footer />}
    </>
  );
};

export default Routes;
