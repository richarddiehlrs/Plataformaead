import styled, { css } from 'styled-components';

interface ContainerStyle {
  position?: number;
}

export const Container = styled.div<ContainerStyle>`
  display: flex;
  flex-direction: column;
  width: 100%;

  ${(props) => (props.position === 0 ? css`margin-top: 60px;` : css`margin-top: 20px;`)}

`;

export const CategoryTitle = styled.div`
  display: flex;
  align-items: center;

  color: #E9EAED;
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

  a{
    text-decoration: none;

    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: auto;
    margin-right: 12px;

    color: rgb(254,212,74,1);
  }

  h4{
    z-index: 3;
    align-items: center;
    font-weight: lighter;
    font-size: 14px;

    &:hover{
      text-shadow: 0 0 10px rgb(254,212,74,0.4);
      cursor: pointer;
    }
  }

  button{
    margin-left: 12px;
    z-index: 3;
  }

  .category-title{
    width: 100px;
    height: 12px;
  }
`;

export const CarouselWrapper = styled.div`
  display: flex;
  border-radius: 12px;

  width: 100vw;
  height: 340px ;


  .awssld__content{
    background: transparent;

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
    opacity: 0;

    transition: opacity 0.4s;
  }
`;
