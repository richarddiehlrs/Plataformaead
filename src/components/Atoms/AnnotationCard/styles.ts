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

  transition: 0.4s;

  h4{
    font-weight: lighter;
    margin-bottom: 4px;
  }

  &:hover{
    background: ${shade(0.4, '#535a6c')};
    transform: scaleX(1.05) scaleY(1.05);
  }
`;

export const OptionsWrapper = styled.div`
  position: absolute;
  padding: 8px 10px;

  top: 0;
  right: 0;

  .edit{
    width: 22px;
    margin-right: 12px;
    transition: .4s;

    &:hover{
      cursor: pointer;
      opacity: 0.2;
    }
  }

  .remove{
    color: #fbfdfa;
    transition: 0.4s;
    width: 20px;

    &:hover{
      cursor: pointer;
      opacity: 0.2;
    }
  }
`;

export const StyledButton = styled.button`
  background: transparent;
  border: none;

`;
