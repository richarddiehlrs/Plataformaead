import styled, { css } from 'styled-components';
import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  hasValue: boolean;
  hasError: boolean;
  enabled: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #7a8095;
  border-radius: 30px;

  display: flex;
  align-items: center;

  padding: 16px;
  width: 100%;

  border: 2px solid #7a8095;
  color: white;


  & + div {
    margin-top: 8px;
  }
  box-shadow: 0 10px 20px rgba(0,0,0,0.2);

  transition: border 0.4s, box-shadow 0.4s;

  ${(props) => props.hasError
    && css`
      border: 2px solid #c53030;
    `}

  ${(props) => props.isFocused
    && css`
      border: 2px solid #ffa22b;
      color: #ffa22b;
      box-shadow: 0 10px 20px rgba(0,0,0,0.4);
    `}

  ${(props) => props.hasValue
    && css`
      border: 2px solid #ffa22b;
      color: #ffa22b;
    `}

  ${(props) => !props.enabled
    && css`
      pointer-events: none;
      opacity: 0.5;
    `}

  input {
    background: transparent;
    flex: 1;
    border: 0;

    color: #fff;
    &::placeholder {
      color: #fff;
    }

  /* border: solid 1px #000; */
  margin-right: 40px;

  }

  svg {
    margin-right: 16px;
  }

  @media (max-width: 900px) {
    width: 300px !important;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;

  svg {
    margin-right: 0px;
  }

  span {
    color: #fff;
    background-color: #c53030;

    &::before {
      border-color: #c53030 transparent;
    }
  }
`;

export const EyePassword = styled.div`
  height: 20px;

  svg {
    margin-right: 0px;
    color: #b4bad4;

    transition: color 0.4s;

    &:hover{
      cursor: pointer;
      color: #ffa22b;
    }

  }
`;
