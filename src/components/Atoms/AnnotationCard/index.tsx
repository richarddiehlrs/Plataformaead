import React from 'react';

import closeIcon from 'assets/icons/closeIcon.png';
import editIcon from 'assets/icons/editIcon.png';

import { Container, OptionsWrapper } from './styles';

interface AnotationCardProps {
  time: string;
  description: string;
}

const AnnotationCard: React.FC<AnotationCardProps> = ({ time, description }) => (
  <Container>
    <OptionsWrapper>
      <img className="edit" src={editIcon} alt="editIcon" />
      <img className="remove" src={closeIcon} alt="closeIcon" />
    </OptionsWrapper>
    <h4>{time}</h4>
    <p>{description}</p>
  </Container>
);

export default AnnotationCard;
