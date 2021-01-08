import React from 'react';
import { motion } from 'framer-motion';

import { RoundSpanContainer, DotWaveContainer, DotWave } from './styles';

const spinTransition = {
  loop: Infinity,
  duration: 1.2,
  easeIn: 0.2,
};

interface LoadingProps{
  customColors?: Array<string>;
  size?: number;
  type?: string;
}

const Loading: React.FC<LoadingProps> = ({ customColors = [], size = 0, type = 'round' }) => {
  const loadingCircleVariants = {
    start: {
      y: '0%',
    },
    end: {
      y: '100%',
    },
  };

  const loadingCircleTransition = {
    duration: 0.4,
    yoyo: Infinity,
    ease: 'easeInOut',
  };

  const loadingContainerVariants = {
    start: {
      transition: {
        staggerChildren: 0.1,
      },
    },
    end: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <>
      {type === 'round' && (
      <RoundSpanContainer className="round-span" customColors={customColors} size={size}>
        <motion.span animate={{ rotate: 360 }} transition={spinTransition} />
      </RoundSpanContainer>
      )}
      {type === 'ellipsis' && (
      <DotWaveContainer
        variants={loadingContainerVariants}
        initial="start"
        animate="end"
      >
        <DotWave
          variants={loadingCircleVariants}
          transition={loadingCircleTransition}
        />
        <DotWave
          variants={loadingCircleVariants}
          transition={loadingCircleTransition}
        />
        <DotWave
          variants={loadingCircleVariants}
          transition={loadingCircleTransition}
        />
      </DotWaveContainer>
      )}
    </>
  );
};

export default Loading;
