import React from 'react';
import { FiEdit2, FiX } from 'react-icons/fi';

import { Container, OptionsWrapper } from './styles';

interface AnotationCardProps {
  time: string;
  description: string;
}

const AnotationCard: React.FC<AnotationCardProps> = ({ time, description }) => (
  <Container>
    <OptionsWrapper>
      <FiEdit2 className="edit" size={20} />
      <FiX className="remove" size={20} />
    </OptionsWrapper>
    <h4>{time}</h4>
    <p>{description}</p>
  </Container>
);

export default AnotationCard;
