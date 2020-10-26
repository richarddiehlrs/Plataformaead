import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface ContainerProps {
  enabled?: boolean;
}

export const Container = styled.button<ContainerProps>`
  background: #ffd35c;
  border-radius: 30px;
  height: 56px;
  border: 0;
  padding: 0 16px;
  width: 100%;

  color: #000;
  font-weight: 500;

  box-shadow: 0 10px 20px rgba(0,0,0,0.4);

  margin-top: 16px;
  transition: background-color 0.2s;

  &:hover {
    background: ${shade(0.4, '#ffd35c')};
    cursor: pointer;
  }

  ${(props) => props.enabled === false
    && css`
      opacity: 0.3;
      pointer-events: none;
    `}
`;
