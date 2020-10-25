import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface HeaderProps {
  tab?: boolean;
}

interface OptionsProps {
  collapsible?: boolean;
  isCollapsed?: boolean;
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

export const LogoOptions = styled.div<OptionsProps>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin-left: auto;
  height: auto;
  width: 50%;
  padding: 12px;

  border-radius: 12px;

  transition: width 0.2s;

  @media (max-width: 1240px){
    width: 120px;
    display: block;
  }
`;

export const CollasibleMenu = styled.div<OptionsProps>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 180px;

  margin-left: auto;
  height: 30px;
  padding: 12px;

  border-radius: 12px;

  a {
    text-decoration: none;
  }

  p {
    color: #fff;

    transition: color 0.4s;

    font-family: 'Fira Sans', sans-serif;
    font-size: 16px;

    &:hover {
      cursor: pointer;
      color: ${shade(0.4, '#bdbdbd')};
    }
  }

  .collapsed-icon {
    display: none;
  }

  transition: height 0.4s;

  @media (max-width: 1240px){
    overflow: hidden;
    margin-top: -20px;


    ${(props) => !props.isCollapsed && css`
      position: absolute;

      box-shadow: 0 0 10px rgba(255,255,255,0.1);
      background: rgba(0,0,0,0.08);

      width: 160px;
      height: 200px;

      display: flex;
      flex-direction: column;
      align-items: flex-start;
      p{
        margin-bottom: 12px;
      }

    `}
    ${(props) => props.isCollapsed && css`
      position: absolute;

      width: auto;
      height: 60px;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .logo-option{
        display: none;
        margin-bottom: 12px;
      }

      .collapsed-icon{
        display: block;
      }
    `}

  }
`;

export const CollapsedMenu = styled.div`
  .bar{
    display: none;
    @media(max-width: 1240px){
      width: 44px;
      height: 2px;
      background: white;

      display:flex;
      flex-direction:column;

      margin-bottom: 12px;

      display: block;
    }
  }
`;

export const Option = styled.p<HeaderProps>`
   ${(props) => props.tab
    && css`
      border-bottom: 1px solid #fff;
    `}
`;
