import styled, { css } from 'styled-components';
import Button from 'components/Atoms/Button';

interface AnnotationsContainerProps{
  hasNotes: boolean;
}

export const Container = styled.div`
  display: flex;
  /* flex-direction: row-reverse; */
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
  position: relative;

  width: 100%;
  height: 40%;

  transition: height .4s;

  ${(props) => !props.hasNotes && css`
    height: 30%;
  `}
  background: rgba(0,0,0,0.04);
`;

export const AddNoteWrapper = styled.div`
  position: absolute;

  width: 200px;
  height: auto;

  right: 0;
  top: 0;

  margin-top: -40px;
  z-index: 2;
`;

export const StyledButton = styled(Button)`
  width: 190px;
  height: 40px;
`;

export const NotesWrapper = styled.div`
  display: flex;
  overflow: scroll; 
  flex-direction: column;
  padding: 32px 128px;

  width: 100%;

  &::-webkit-scrollbar-thumb {
    background: rgb(254,212,74) !important;
  }
`;
