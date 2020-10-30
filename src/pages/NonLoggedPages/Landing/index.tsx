import React, { useCallback, useRef, useState } from 'react';
import { FiUser, FiLock } from 'react-icons/fi';

import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';

import Input from 'components/Atoms/Input';
import Loading from 'components/Atoms/Loading';

import nlLogo from 'assets/images/nlicon.png';

import { useAuth } from 'hooks/auth';

import {
  Container, ContentWrapper, LoginWrapper, FormWrapper, StyledButton,
} from './styles';

const Landing: React.FC = () => {
  const [isLogging, setIsLogging] = useState(false);

  const formRef = useRef<FormHandles>(null);
  const { signIn } = useAuth();

  const handleLogin = useCallback(async () => {
    setIsLogging(true);
    await signIn({ username: 'thiago.coradi', password: '123456' });
    setIsLogging(false);
  }, [signIn]);

  return (
    <Container>
      <ContentWrapper>
        <LoginWrapper>
          <img src={nlLogo} alt="logo" />
          <Form ref={formRef} onSubmit={handleLogin}>
            <FormWrapper>
              <h3>Login</h3>
              <Input
                name="username"
                icon={FiUser}
                placeholder="Digite seu e-mail"
                style={{ width: 300 }}
              />
              <Input
                name="password"
                icon={FiLock}
                type="password"
                placeholder="Sua senha"
              />
              <StyledButton
                type="submit"
                enabled={!isLogging}
              >
                {isLogging ? <Loading /> : 'ENTRAR'}
              </StyledButton>
            </FormWrapper>
          </Form>
        </LoginWrapper>
      </ContentWrapper>
    </Container>
  );
};

export default Landing;
