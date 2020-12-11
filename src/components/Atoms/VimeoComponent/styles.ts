import styled, { css } from 'styled-components';

interface ContainerProps{
  large: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 12px;

  width: 50%;
  height: 100%;

  padding: 20px;

  transition: width .4s;

  ${(props) => props.large && css`
    width: 80%;
  `}
`;
