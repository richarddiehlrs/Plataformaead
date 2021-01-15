import styled, { css } from 'styled-components';
import Button from 'components/Atoms/Button';

interface AnnotationsContainerProps{
  hasNotes: boolean;
}

export const Container = styled.div`
  position: relative;
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

  padding: 16px;

  margin-bottom: auto;
`;

export const AnnotationsContainer = styled.div<AnnotationsContainerProps>`
  display: flex;
  flex-direction: column;
  position: relative;

  width: 100%;
  height: 40%;

  ${(props) => !props.hasNotes && css`
    height: 30%;
  `}

  background: rgba(0,0,0,0.04);

  &::-webkit-scrollbar-thumb {
    background: rgb(254,212,74) !important;
  }
`;

export const AddNoteWrapper = styled.div`
  position: absolute;

  width: 200px;
  height: auto;

  right: 0;
  top: 0;

  margin-top: -26px;
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

export const SaveNoteButton = styled(Button)`
  width: 180px;
  height: 40px;
  
  display: flex;
  align-self: flex-end;
  justify-content: center;
  align-items: center;

  font-family: "Raleway";
  font-size: 12px;
  font-weight: normal;

`;

export const CloseModalButton = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    font-weight: bold;

    margin-top: 8px;
    margin-right: 8px;

    img{
        opacity: 1;
        width: 20px;

        transition: .4s;
    }

    &:hover{
        transform: scaleX(1.04) scaleY(1.04);

        img{
            opacity: 0.5;
            cursor: pointer;
        }
    }
`;
