import styled, { css } from 'styled-components';

interface ContainerProps{
  large: boolean;
  from?: string;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 12px;

  width: 78%;

  transition: width .4s;

  ${(props) => props.large && css`
    width: 100%;
  `}

  ${(props) => props.from === 'course' && css`
    height: 100%;
  `}

  ${(props) => props.from === 'class' && css`
    height: 100%;
  `}
`;
