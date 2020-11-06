import styled from 'styled-components';
import { shade } from 'polished';

interface UserContainerProps {
  bg: string;
}

export const Container = styled.header`
  background: rgba(0, 0, 0, 0);

  width: 100%;

  border-radius: 0 0 10px 10px;
  box-sizing: border-box;

  padding: 0 80px;

  display: flex;
`;

export const LogoContent = styled.div`
  width: 100%;
  height: 120px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.img`
  height: 60px;

  opacity: 1;

  transition: transform 0.4s;

  &:hover{
    transform: scaleX(1.1) scaleY(1.1);
    cursor: pointer;
  }
`;

export const UserContainer = styled.div<UserContainerProps>`
  margin-left: 2%;
  width: 300px;
  height: 64px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;



  button{
    background: transparent;
    border: none;
  }

  svg{
    color:#dbdbdb;

    transition: color 0.4s;

    &:hover{
      color: ${shade(0.4, '#dbdbdb')};
      cursor: pointer;
    }
  }

  .image-container{
    display: flex;

    width: 64px;
    height: 64px;
    border-radius: 50%;
    border: solid 2px #dbdbdb;

    flex-shrink: 0;

    img{
      width: 100%;
      height: 100%;
      border-radius: 50%;
      object-fit: cover;
      flex-shrink: 0;
    }
  }
  .user-data-container{
    color: #dbdbdb;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;
