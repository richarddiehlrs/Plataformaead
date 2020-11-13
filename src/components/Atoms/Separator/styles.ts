import styled, { css } from 'styled-components';

interface ContainerProps {
  type?: 'vertical' | 'horizontal';
  customHeight?: number;
  customWidth?: number;
  customColor?: string;
}

export const Container = styled.div<ContainerProps>`
  background: rgba(147, 147, 147,0.6);

  margin-left: 20px;

  ${(props) => props.type === 'vertical' && (
    css`
      width: 2px;
      height: ${props.customHeight}%;
    `
  )}

  ${(props) => props.type === 'horizontal' && (
    css`
      height: 1px;
      width: ${props.customWidth}%;
      margin: 0;

      background: linear-gradient(90deg, rgba(157, 163, 186,0.22) 0%, rgba(157, 163, 186,1) 50%, rgba(157, 163, 186,0.22) 100%);
    `
  )}

  ${(props) => props.customColor && css`
    background: ${props.customColor};
  `}
`;
