import React from 'react';
import { motion } from 'framer-motion';

import { Container } from './styles';

const spinTransition = {
  loop: Infinity,
  duration: 1.2,
  easeIn: 0.2,
};

const Loading: React.FC = () => (
  <Container>
    <motion.span animate={{ rotate: 360 }} transition={spinTransition} />
  </Container>
);

export default Loading;
