import React, { useCallback } from 'react';

import { useAuth } from '../../../hooks/auth';

// import Loading from '../../../components/atoms/Loading';

import { Container } from './styles';

const Landing: React.FC = () => {
  const { signIn } = useAuth();

  const handleLogin = useCallback(() => {
    signIn({ username: 'thiago.coradi', password: '123456' });
  }, [signIn]);

  return (
    <Container>
      {/* <Loading /> */}
      <div>
        <h3>Testando login</h3>
        <button type="button" onClick={handleLogin}>Testar</button>
      </div>
    </Container>
  );
};

export default Landing;