import React, { useCallback } from 'react';
import { useAuth } from '../../hooks/auth';

import Header from '../../components/Header';

import { Container } from './styles';

const Cursos: React.FC = () => {
  const { signOut } = useAuth();

  const handleSignOut = useCallback(() => {
    signOut();
  }, [signOut]);

  return (
    <Container>
      <Header actualTab="cursos" />
      <p>Cursos</p>
      <button onClick={handleSignOut} type="button">Sair</button>
      ;
    </Container>
  );
};

export default Cursos;
