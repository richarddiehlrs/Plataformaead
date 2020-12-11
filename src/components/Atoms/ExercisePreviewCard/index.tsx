import React from 'react';
import { FaChevronRight } from 'react-icons/fa';

import { Container, Content, StyledButton } from './styles';

interface ExercisePreviewCardProps {
  description: string;
}

const ExercisePreviewCard: React.FC<ExercisePreviewCardProps> = ({ description = '' }) => (
  <Container>
    <p>TAREFA</p>
    <Content>
      <p>
        {`${description}...`}
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
