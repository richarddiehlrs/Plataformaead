import styled from 'styled-components';

export const Container = styled.header`
  background: rgba(0, 0, 0, 0.1);

  width: 100%;

  border-radius: 0 0 10px 10px;
  box-sizing: border-box;

  padding: 0 80px;

  display: flex;

`;

export const LogoContent = styled.div`
  width: 100%;
  height: 100px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.img`
  height: 40px;

  opacity: 1;

  transition: transform 0.4s;

  &:hover{
    transform: scaleX(1.1) scaleY(1.1);
    cursor: pointer;
  }
`;

export const Separator = styled.div`
  background-image: linear-gradient(black, #707070);

  width: 1px;
  height: 60%;
  margin-bottom: auto;
  margin-left: 20px;
`;

export const UserContainer = styled.div`
  margin-left: 2%;
  width: 240px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  .image-container{
    img{
      width: 56px;
      height: 56px;

      border: solid 2px #dbdbdb;

      border-radius: 50%;
    }
  }

  .user-data-container{
    color: #dbdbdb;
  }

`;
