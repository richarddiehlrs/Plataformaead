import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;

  height: 84vh;

  border: solid 1px green;

`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 100%;


`;

export const VideoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  /* border: solid 1px blue; */

  margin-bottom: auto;
`;

export const AnotationsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px 128px;

  width: 100%;
  height: 100%;

  overflow: scroll;

  background: rgba(0,0,0,0.04);

  &::-webkit-scrollbar-thumb {
    background: rgb(254,212,74) !important;
  }
`;
