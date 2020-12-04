import styled from 'styled-components';
import Button from 'components/Atoms/Button';

export const Container = styled.div`
  display: flex;
`;

export const SelectContainer = styled.div`
  display: flex;
  padding: 12px;

  overflow-y: hidden;
  overflow-x: scroll;

  &::-webkit-scrollbar{
    scrollbar-width: 4px !important;
  }
`;

export const ButtonContaier = styled.div`
  padding: 8px;
`;

export const StyledButton = styled(Button)`
  margin: 0;

  width: 110px;
  height: 36px;

  display: flex;
  justify-content: center;
  align-items: center;
`;
