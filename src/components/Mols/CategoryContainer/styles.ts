import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

`;

export const CategoryTitle = styled.div`
  display: flex;
  align-items: center;

  color: #fff;
  width: 92%;

  padding: 0 68px;

  font-family: 'Roboto Regular', sans-serif;

  p{
    font-size: 20px;
    margin-right: 12px;
    margin-bottom: -80px;
  }

  h3{
    margin-bottom: -80px;
    margin-right: 12px;
  }
`;

export const CarouselWrapper = styled.div`
  display: flex;
  border-radius: 12px;

  width: 100vw;
  height: 340px ;


  .awssld__content{
    background-color: rgba(0,0,0,0.02);

    border-radius: 12px;
  }
  .awssld__content:first-child > div{
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    width: 92%;
  }

  .awssld__controls__arrow-right::before,
  .awssld__controls__arrow-right::after,
  .awssld__controls__arrow-left::before,
  .awssld__controls__arrow-left::after{
    background: #fff;
  }
`;
