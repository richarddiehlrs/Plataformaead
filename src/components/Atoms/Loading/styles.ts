import styled, { css } from 'styled-components';

interface ContainerProps {
  size?: number;
  customColors?: Array<string>;
}

export const Container = styled.div<ContainerProps>`
position: relative;


${(props) => (props.size !== 0 ? css`
  width: ${props.size}rem;
  height: ${props.size}rem;
` : css`
  width: 3rem;
  height: 3rem;
`)}

span{
  display: block;
  ${(props) => (props.size !== 0 ? css`
    width: ${props.size}rem;
    height: ${props.size}rem;
` : css`
    width: 3rem;
    height: 3rem;
`)}

  border: 0.2rem solid #e9e9e9;
  border-top: 0.2rem solid #fc9003;
  border-right: 0.2rem solid #fac278;
  border-bottom: 0.2rem solid #ffe2bd;
  border-left: 0.2rem solid #ffefdb;

  border-radius: 50%;
  box-shadow: inset 0 2px 10px rgba(0,0,0,0.4);

  box-sizing: border-box;
  top: 0;
  left: 0;

  position: absolute;
}
`;
