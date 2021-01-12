/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useCallback, useState, useRef } from 'react';

import closeIcon from 'assets/icons/closeIcon.png';
import editIcon from 'assets/icons/editIcon.png';

import { formatTime } from 'utils/functions';

import Loading from 'components/Atoms/Loading';

import {
  Container, OptionsWrapper, StyledButton, StyledInput, OptionStyledButton,
} from './styles';

interface AnotationCardProps {
  time: string;
  index: number;
  description: string;
  isNoteLoading?: boolean;
  onDelete?(noteId: string, index: number): Promise<void>;
  onEdit?(text: string, index: number): void;
}

const AnnotationCard: React.FC<AnotationCardProps> = ({
  time, index, description, isNoteLoading = false, onDelete, onEdit,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [noteEditText, setNoteEditText] = useState(description);
  const noteRef = useRef<HTMLDivElement>(null);

  const handleDeleteNote = useCallback(async () => {
    onDelete && onDelete(time, index);
  }, [time, index, onDelete]);

  const handleEditNote = useCallback((action: string) => {
    setIsEditing(!isEditing);
    switch (action) {
      case 'input':
        break;
      case 'edit':
        if (description !== noteEditText) {
          onEdit && onEdit(noteEditText, index);
        }
        break;
      default:
        break;
    }
  }, [onEdit, isEditing, noteEditText, index, description]);

  return (
    <Container ref={noteRef}>
      <OptionsWrapper>
        <span>
          <StyledButton type="button" onClick={() => handleEditNote('input')}>
            <img className="edit" src={editIcon} alt="editIcon" />
          </StyledButton>
        </span>
        <span>
          <StyledButton type="button" onClick={handleDeleteNote}>
            <img className="remove" src={closeIcon} alt="closeIcon" />
          </StyledButton>
        </span>
      </OptionsWrapper>

      <h4>{formatTime(time)}</h4>
      {!isNoteLoading ? (
        <>
          {!isEditing ? (
            <>
              <p>{description}</p>
            </>
          ) : (
            <div className="edit-note">
              <StyledInput type="text" onChange={(e) => setNoteEditText(e.target.value)} value={noteEditText} />
              <OptionStyledButton customStyle="success" onClick={() => handleEditNote('edit')}>
                Confirmar alterações
              </OptionStyledButton>
              <OptionStyledButton className="cancel-button" customStyle="danger" onClick={() => setIsEditing(false)}>
                Cancelar
              </OptionStyledButton>
            </div>
          )}
        </>
      ) : (
        <Loading size={2} type="ellipsis" />
      )}
    </Container>
  );
};

export default AnnotationCard;
