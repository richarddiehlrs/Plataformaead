import React from 'react';

import { Container } from './styles';

interface SeparatorProps {
  type?: 'vertical' | 'horizontal';
  customHeight?: number;
  customWidth?: number;
}

const Separator: React.FC<SeparatorProps> = (
  {
    type = 'vertical',
    customHeight = 60,
    customWidth = 100,
  },
) => (
  <Container
    type={type}
    customHeight={customHeight}
    customWidth={customWidth}
  />
);

export default Separator;
