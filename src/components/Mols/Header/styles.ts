import styled from 'styled-components';
import { shade } from 'polished';

interface UserContainerProps {
  bg: string;
}

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
    width: 56px;
    height: 56px;
    border-radius: 50%;
    border: solid 2px #dbdbdb;

    background-image: url(${(props) => `${props.bg}`});
    background-size: auto;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
    object-fit: cover;

    flex-shrink: 0;
  }
  .user-data-container{
    color: #dbdbdb;
  }
`;
