import React from 'react';

import Skeleton from 'components/Skeleton';
import { Container } from './styles';

const MovieCard: React.FC = () => (
  <Container>
    <Skeleton className="bg-skeleton" />
    <span>
      <Skeleton className="progress-bar-wrapper-skeleton">
        <Skeleton className="progress-bar-skeleton" />
      </Skeleton>
    </span>
  </Container>
);

export default MovieCard;
