import styled from 'styled-components';

export const Container = styled.div``;

export const CarouselWrapper = styled.div`
  display: flex;
  border-radius: 12px;

  width: 100vw;
  height: 340px ;

  margin-top: 64px;

  .awssld__content{
    background-color: rgba(0,0,0,0.04);

    border-radius: 12px;
  }
  .awssld__content:first-child > div{
    display: flex;
    flex-direction: row;
    width: 92%;
  }

  .awssld__controls__arrow-right::before,
  .awssld__controls__arrow-right::after,
  .awssld__controls__arrow-left::before,
  .awssld__controls__arrow-left::after{
    background: #fff;
  }
`;

export const MovieWrapper = styled.div`
  display: flex;
`;

export const MovieCard = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 36px;

  img{
    width: 140px;
    height: 220px;

    object-fit: cover;

    box-shadow: 0 0 10px rgba(0,0,0,0.3);
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
