import { createGlobalStyle } from 'styled-components';
import grayGradient from '../assets/images/background.png';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;

    &::-webkit-scrollbar {
      display: none;
    }

    @media(max-width: 830px){
      body{
        min-width: 820px;
      }
    }
  }

  body {
    background-image: url(${grayGradient});

    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;


  }

`;
