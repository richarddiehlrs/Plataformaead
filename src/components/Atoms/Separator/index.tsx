import React from 'react';

import { Container } from './styles';

interface SeparatorProps {
  type?: 'vertical' | 'horizontal';
  customHeight?: number;
  customWidth?: number;
  customColor?: string;
}

const Separator: React.FC<SeparatorProps> = (
  {
    type = 'vertical',
    customHeight = 60,
    customWidth = 100,
    customColor,
  },
) => (
  <Container
    type={type}
    customHeight={customHeight}
    customWidth={customWidth}
    customColor={customColor}
  />
);

export default Separator;
