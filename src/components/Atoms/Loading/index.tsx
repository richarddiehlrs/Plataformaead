import React from 'react';
import { motion } from 'framer-motion';

import { Container } from './styles';

const spinTransition = {
  loop: Infinity,
  duration: 1.2,
  easeIn: 0.2,
};

interface LoadingProps{
  customColors?: Array<string>;
  size?: number;
}

const Loading: React.FC<LoadingProps> = ({ customColors = [], size = 0 }) => (
  <Container customColors={customColors} size={size}>
    <motion.span animate={{ rotate: 360 }} transition={spinTransition} />
  </Container>
);

export default Loading;
