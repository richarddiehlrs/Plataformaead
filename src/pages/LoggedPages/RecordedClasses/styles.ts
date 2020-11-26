import styled from 'styled-components';
import Button from 'components/Atoms/Button';

export const Container = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;

  height: 88vh;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 100%;

  padding: 0 10px;
`;

export const VideoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  margin-bottom: auto;
`;

export const OptionsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 80px 300px;

  width: 100%;
  height: 70%;

  background: rgba(0,0,0,0.04);
`;

export const LiveClasses = styled.div`
  width: 260px;
  height: 100%;
  display: flex;
  flex-direction: column;

  font-family: 'Roboto';
  color: #fff;

  padding: 24px;

  svg{
    margin-bottom: 20px;
  }
  strong{
    font-size: 32px;
  }
  p{
    font-size: 20px;
  }
`;

export const Doubts = styled.div`
  width: 260px;
  height: 100%;
  display: flex;
  flex-direction: column;

  font-family: 'Roboto';
  color: #fff;

  padding: 24px;

  svg{
    margin-bottom: 20px;
  }
  strong{
    font-size: 32px;
  }
  p{
    font-size: 20px;
  }
`;

export const StyledButton = styled(Button)`
  width: 190px;
  height: 24%;

`;
