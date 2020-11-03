import styled from 'styled-components';

export const Container = styled.div`
  width: 8%;
  height: 50px;
  padding: 0 20px;

  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;

  font-weight: bold;
  font-size: 20px;

  .pageBack{
    margin-right: auto;
  }

  .pageNext{
    margin-left: auto;
  }

  .pageBack,
  .pageNext {
    transition: 0.4s;

    &:hover{
      cursor: pointer;
      transform: scaleX(1.4) scaleY(1.4);
    }
  }

  .blankspace{
    width: 48%;
  }
`;
