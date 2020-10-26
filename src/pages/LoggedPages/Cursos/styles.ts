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
    justify-content: center;
    width: 92%;

  }

  .awssld__controls__arrow-right::before,
  .awssld__controls__arrow-right::after,
  .awssld__controls__arrow-left::before,
  .awssld__controls__arrow-left::after{
    background: #fff;
  }
`;
