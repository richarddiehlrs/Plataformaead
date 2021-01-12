import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface ContainerProps {
  enabled?: boolean;
  contrast?: boolean;
  noShaddow?: boolean;
  shimmer?: boolean;
  customStyle?: string;
}

export const Container = styled.button<ContainerProps>`
  background: #FED44A;
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

  font-family: 'Raleway', sans-serif;
  font-size: 16px;
  font-weight: bold;
  color: #353536;

  &:hover {
    background: ${shade(0.4, '#FED44A')};
    cursor: pointer;
  }

  ${(props) => props.noShaddow && css`
    box-shadow: none;
  `}

  ${(props) => props.enabled === false
    && css`
      opacity: 0.4;
      pointer-events: none;
    `}

  ${(props) => props.contrast && css`
    background: rgba(255, 211, 92,0.14);
    border: solid 2px #FED44A;
    color: #FED44A;

    box-shadow: none;
  `}


  ${(props) => props.shimmer && css`
    animation: buttonShimmer 2s ease-in-out infinite;
  `}
  
  ${(props) => props.customStyle === 'success' && css`
    background: #04b530;
    color: #fff;
  `}

  ${(props) => props.customStyle === 'danger' && css`
    background: #bf0202;
    color: #fff;
  `}

  ${(props) => props.customStyle === 'white' && css`
    background: #fff;
    border: solid 2px #353536;
  `}
  
  @keyframes buttonShimmer {
    0%{
      background:rgba(255, 211, 92,0.4);
    }
    50%{
      background:rgba(255, 211, 92,0.8);
    }
    100%{
      background:rgba(255, 211, 92,0.4);
    }
  }
`;
