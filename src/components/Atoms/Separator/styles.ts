import styled, { css } from 'styled-components';

interface ContainerProps {
  type?: 'vertical' | 'horizontal';
}

export const Container = styled.div<ContainerProps>`
  background: linear-gradient(black, #707070);


  margin-bottom: auto;
  margin-left: 20px;

  ${(props) => props.type === 'vertical' && (
    css`
      width: 2px;
      height: 60%;
    `
  )}

${(props) => props.type === 'horizontal' && (
    css`
      height: 2px;
      width: 60%;
    `
  )}
`;
