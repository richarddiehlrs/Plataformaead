import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const ContentWrapper = styled.main`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;



`;

export const LoginWrapper = styled.div`
  height: 56%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 8%;

  img{
    height: 200px;
  }
`;

export const FormWrapper = styled.div`
  height: 300px;

  display: flex;
  flex-direction: column;

  justify-content: space-between;
  align-items: center;
`;
