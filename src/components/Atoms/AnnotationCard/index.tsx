/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useCallback, useRef } from 'react';

import closeIcon from 'assets/icons/closeIcon.png';
import editIcon from 'assets/icons/editIcon.png';

import { formatTime } from 'utils/functions';

import { Container, OptionsWrapper, StyledButton } from './styles';

interface AnotationCardProps {
  time: string;
  index: number;
  description: string;
  onDelete?(noteId: string, index: number): Promise<void>;
}

const AnnotationCard: React.FC<AnotationCardProps> = ({
  time, index, description, onDelete,
}) => {
  const noteRef = useRef<HTMLDivElement>(null);

  const handleDeleteNote = useCallback(async () => {
    // noteRef.current?.remove();
    onDelete && onDelete(time, index);
  }, [time, index, onDelete]);

  const handleEditNote = useCallback(() => {
    console.log('bb');
  }, []);

  return (
    <Container ref={noteRef}>
      <OptionsWrapper>
        <span>
          <StyledButton type="button" onClick={handleEditNote}>
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
      <p>{description}</p>
    </Container>
  );
};

export default AnnotationCard;
