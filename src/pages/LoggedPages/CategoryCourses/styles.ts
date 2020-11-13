import styled from 'styled-components';
import { shade } from 'polished';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Heading = styled.div`
  width: 100vw;
  padding: 40px 120px;
  display: flex;
  align-items: center;

  p{
    font-family: 'Raleway', sans-serif;
    font-weight: bold;
    font-size: 22px;
    color: #E9EAED;
    margin-left: 20px;

    strong{
      font-weight: lighter;
      margin-left: 12px;
    }
  }

  svg{
    color: #fff;
    font-weight: bolder;

    transition: color 0.4s;
    margin-left: -40px;

    &:hover{
      cursor: pointer;
      color: ${shade(0.3, '#E9EAED')};
    }
  }
  .category-title{
    width: 100px;
    height: 12px;

    margin-left: 20px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 80px;
  row-gap: 140px;

  width: 100vw;
  padding: 20px 120px;

  transition: 0.5s ease-out;

  .flex-item{
    flex: 0 1 calc(12.6666%);
  }

`;

export const FooterContainer = styled.div`
  margin-top: 4%;
`;
