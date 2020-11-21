import { createGlobalStyle } from 'styled-components';

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
    background: radial-gradient(circle, rgba(161,167,183,1) 6%, rgba(161,167,183,1) 9%, rgba(156,162,179,1) 13%, rgba(151,157,175,1) 15%, rgba(147,153,171,1) 19%, rgba(143,149,167,1) 21%, rgba(139,145,163,1) 25%, rgba(134,141,159,1) 30%, rgba(130,137,155,1) 33%, rgba(125,132,150,1) 38%, rgba(119,126,144,1) 44%, rgba(114,121,139,1) 48%, rgba(84,91,110,1) 100%);

    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

  }

  .hasVerticalScroll{
    overflow-x: hidden !important;

    &::-webkit-scrollbar {
      display: unset;
    }
    &::-webkit-scrollbar {
      width: 4px !important;
    }
    &::-webkit-scrollbar-track {
      background: transparent;
    }
    &::-webkit-scrollbar-thumb {
      background: #565f7c;
      border-radius: 8px;
    }
    &::-webkit-scrollbar-thumb:hover {
      background: #555;
    }

    &:hover{
      cursor: pointer;
    }
  }

`;
