import React, {
  useState, useMemo,
} from 'react';
import { Switch } from 'react-router-dom';

import { useAuth } from 'hooks/auth';

import Header from 'components/Mols/Header';

// Pages Non Logged
import Landing from 'pages/NonLoggedPages/Landing';
// Pages Logged
import Courses from 'pages/LoggedPages/Courses';
import Course from 'pages/LoggedPages/Course';
import LiveClasses from 'pages/LoggedPages/LiveClasses';
import CategoryCourses from 'pages/LoggedPages/CategoryCourses';

import Route from './Route';

const Routes: React.FC = () => {
  const [tab, setTab] = useState('courses');
  const { user } = useAuth();

  const HeaderTabs = useMemo(() => [
    { key: 'courses', value: 'Cursos' },
    { key: 'liveclasses', value: 'Aulas ao vivo' },
    { key: 'gravadas', value: 'Aulas gravadas' },
    { key: 'plantao', value: 'Plantão de dúvidas' },
    { key: 'mensagens', value: 'Mensagens' },
  ], []);

  return (
    <>
      {user && <Header actualTab={tab} tabs={HeaderTabs} changeTab={setTab} />}
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/courses" component={Courses} isPrivate />
        <Route path="/categorycourses/:categoryId/:categoryName" component={CategoryCourses} isPrivate />
        <Route path="/course/:courseid" component={Course} isPrivate />
        <Route path="/liveclasses" component={LiveClasses} isPrivate />
      </Switch>
    </>
  );
};

export default Routes;
