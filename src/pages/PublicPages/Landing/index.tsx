import React, { useCallback, useRef, useState } from 'react';
import { FiUser, FiLock } from 'react-icons/fi';
import * as Yup from 'yup';

import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import getValidationErrors from 'utils/getValidationErrors';

import { useAuth } from 'hooks/auth';
import { useToast } from 'hooks/toast';

import Input from 'components/Atoms/Input';
import Loading from 'components/Atoms/Loading';

import nlLogo from 'assets/images/nlicon.png';

import {
  Container, ContentWrapper, LoginWrapper, FormWrapper, StyledButton,
} from './styles';

interface DataFormInfo {
  username: string;
  password: string;
}

const Landing: React.FC = () => {
  const [isLogging, setIsLogging] = useState(false);

  const formRef = useRef<FormHandles>(null);

  const { signIn } = useAuth();
  const { addToast } = useToast();

  const handleLogin = useCallback(async (data: DataFormInfo) => {
    setIsLogging(true);
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        username: Yup.string().required('Usuário obrigatório!'),
        password: Yup.string().required('Senha obrigatória!'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      await signIn({ username: data.username, password: data.password });
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);

        formRef.current?.setErrors(errors);
        setIsLogging(false);
      } else {
        addToast({
          type: 'error',
          title: 'Erro na autenticação :(',
          description: 'Oops... parece que algo deu errado, confira seu usuário e senha!',
        });
        setIsLogging(false);
      }
    }
  }, [addToast, signIn]);

  return (
    <Container>
      <ContentWrapper>
        <LoginWrapper>
          <img src={nlLogo} alt="logo" />
          <Form ref={formRef} onSubmit={handleLogin}>
            <FormWrapper>
              <h3>LOGIN</h3>
              <Input
                name="username"
                icon={FiUser}
                placeholder="Digite seu usuário"
                style={{ width: 300 }}
                enabled={!isLogging}
              />
              <Input
                name="password"
                icon={FiLock}
                type="password"
                placeholder="Sua senha"
                enabled={!isLogging}
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
