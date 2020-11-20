import React from 'react';
import { FaChevronRight } from 'react-icons/fa';

import { Container, Content, StyledButton } from './styles';

const ExercisePreviewCard: React.FC = () => (
  <Container>
    <p>TAREFA</p>
    <Content>
      <p>
        Criar 10 perguntas diretas e 10 indiretas. Logo em seguida criar...
      </p>
    </Content>
    <StyledButton>
      <p>
        IR PARA A TAREFA
        <FaChevronRight size={12} />
      </p>
    </StyledButton>
  </Container>
);

export default ExercisePreviewCard;
