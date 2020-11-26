import React from 'react';

import { Container } from './styles';

interface ProgressBarProps {
  at: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ at }) => (
  <Container at={at}>
    <div className="progress-bar " />
  </Container>
);

export default ProgressBar;
