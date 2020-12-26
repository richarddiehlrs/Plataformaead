import styled from 'styled-components';

interface AnnotationsContainerProps{
  hasNotes: boolean;
}

export const Container = styled.div`
  display: flex;
  align-items: center;

  height: 88vh;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 100%;

  padding: 0 10px;
`;

export const VideoContainer = styled.div`
  display: flex;  
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  margin-bottom: auto;
`;

export const AnnotationsContainer = styled.div<AnnotationsContainerProps>`
  display: flex;
  flex-direction: column;
  padding: 32px 128px;

  width: 100%;
  height: 70%;

  overflow: scroll;

  background: rgba(0,0,0,0.04);

  &::-webkit-scrollbar-thumb {
    background: rgb(254,212,74) !important;
  }
`;
