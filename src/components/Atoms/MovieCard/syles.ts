import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 36px;
  border-radius: 4px;

  img{
    width: 240px;
    height: 160px;

    object-fit: cover;

    box-shadow: 0 0 10px rgba(0,0,0,0.4);
    transition: transform 0.8s;
    border: solid 0.8px rgba(117, 117, 117,0.5);
    border-radius: 4px;

    &:hover{
      cursor: pointer;
      transform: scaleX(1.5) scaleY(1.5);
      z-index: 1;
    }
  }

  p{
    font-weight: 700;
    color: #fff;
    font-size: 16px;
    font-family: 'Fira Sans', sans-serif;

    margin-top: 8px;
  }

  .progress-bar-wrapper{
    width: 100%;
    height: 8px;

    margin-top: 14px;

    border-radius: 12px;

    background: rgba(83, 90, 109,0.4);

    display: flex;
    justify-content: flex-start;
    align-items: center;


    .progress-bar{
      width: 80%;
      height: 100%;

      border-radius: 12px;

      background: rgb(249, 211, 82);
      -moz-box-shadow:    inset 0 0 4px #000000;
      -webkit-box-shadow: inset 0 0 4px #000000;
      box-shadow:         inset 0 0 4px #000000;
    }
  }
`;
