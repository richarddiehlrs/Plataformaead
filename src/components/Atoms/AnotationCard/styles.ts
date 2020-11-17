import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  height: 120px;
  padding: 24px;
  margin-top: 12px;

  background: #535a6c;

  font-family: 'Raleway';
  color: #e7eaf2;

  h4{
    font-weight: lighter;
    margin-bottom: 4px;
  }

`;

export const OptionsWrapper = styled.div`
  position: absolute;
  padding: 8px 10px;

  top: 0;
  right: 0;


  .edit{
    color: #000;
    transition: 0.4s;

    &:hover{
      cursor: pointer;
      color: ${shade(0.2, '#000')}
    }
  }

  .remove{
    color: #fbfdfa;
    transition: 0.4s;

    &:hover{
      cursor: pointer;
      color: ${shade(0.4, '#fbfdfa')}
    }
  }
`;
