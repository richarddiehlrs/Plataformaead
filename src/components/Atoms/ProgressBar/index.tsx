import React from 'react';

import { Container } from './styles';

interface ProgressBarProps {
  at: number;
  customHeight?: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ at, customHeight = 8 }) => (
  <Container at={at} customHeight={customHeight}>
    <div className="progress-bar " />
  </Container>
);

export default ProgressBar;
