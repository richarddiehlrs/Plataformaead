import styled, { css } from 'styled-components';

interface MovieContainerProps {
  type: string;
}

export const Container = styled.div<MovieContainerProps>`
  display: flex;
  flex-direction: column;
  margin-right: 36px;
  border-radius: 4px;


  transition: width 0.4s, height 0.4s;

  ${(props) => props.type === 'horizontal' && css`
    width: 240px;
    height: 160px;
  `}

  ${(props) => props.type === 'vertical' && css`
    width: 140px;
    height: 180px;
  `}

  img{
    object-fit: cover;

    box-shadow: 0 0 10px rgba(0,0,0,0.4);
    transition: transform 0.8s, width 0.4s, height 0.4s;
    border: solid 0.8px rgba(117, 117, 117,0.5);
    border-radius: 4px;

    ${(props) => props.type === 'horizontal' && css`
      width: 240px;
      height: 160px;
    `}

    ${(props) => props.type === 'vertical' && css`
      width: 140px;
      height: 180px;
    `}

    &:hover{
      cursor: pointer;
      transform: scaleX(1.4) scaleY(1.4);
      z-index: 1;
    }
  }

  p{
    color: #fff;
    font-size: 14px;
    font-family: 'Roboto Medium', sans-serif;

    margin-top: 8px;
  }

  .progress-bar-wrapper{
    width: 100%;
    height: 8px;

    margin-top: 14px;

    border-radius: 12px;

    background: rgba(44, 47, 57);

    display: flex;
    justify-content: flex-start;
    align-items: center;


    .progress-bar{
      width: 60%;
      height: 100%;

      border-radius: 12px;

      background: rgb(254, 212, 74);
      /* -moz-box-shadow:    inset 0 0 4px #000000;
      -webkit-box-shadow: inset 0 0 4px #000000;
      box-shadow:         inset 0 0 4px #000000; */
    }
  }
`;
