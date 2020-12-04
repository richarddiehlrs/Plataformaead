import styled from 'styled-components';
import Button from 'components/Atoms/Button';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  font-family: 'Raleway';

  >p{
    color: #ffd35c;
    font-size: 14px;
    font-weight: bold;
  }
`;

export const Content = styled.div`
  background: #1c202a;
  padding: 12px;

  p{
    font-size: 14px;
  }
`;

export const StyledButton = styled(Button)`
  position: absolute;
  right: 0;
  bottom: -16px;

  width: 58%;
  height: 24px;

  font-size: 12px;

  p{
    display: flex;
    justify-content: center;
    align-items: center;
  }

`;
