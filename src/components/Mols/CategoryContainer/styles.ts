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
  width: 100%;
  padding: 0 4%;

  font-family: 'Roboto Regular', sans-serif;

  margin-bottom: -60px;
  p{
    font-size: 20px;
    margin-right: 12px;
  }

  h3{
    margin-right: 12px;
  }

  h4{
    margin-left: auto;
    margin-right: 12px;
    z-index: 3;
  }

  button{
    margin-left: 12px;
    z-index: 3;
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
