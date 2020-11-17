import React from 'react';
import { FiEdit2, FiX } from 'react-icons/fi';

import { Container, OptionsWrapper } from './styles';

const AnotationCard: React.FC = () => (
  <Container>
    <OptionsWrapper>
      <FiEdit2 className="edit" size={20} />
      <FiX className="remove" size={20} />
    </OptionsWrapper>
    <h4>00:16</h4>
    <p>No início, olhar o pronome do exemplo</p>
  </Container>
);

export default AnotationCard;
