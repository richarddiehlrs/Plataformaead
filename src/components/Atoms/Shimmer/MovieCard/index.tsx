import React from 'react';

import Skeleton from 'components/Skeleton';
import { Container } from './styles';

interface ShimmerMovieCard {
  movieViewType: string;
  animationDelay?: number;
}

const MovieCard: React.FC<ShimmerMovieCard> = ({ movieViewType, animationDelay }) => (
  <Container type={movieViewType}>
    <Skeleton className="bg-skeleton" animationDelay={animationDelay} />
    <span>
      <Skeleton className="progress-bar-wrapper-skeleton" animationDelay={animationDelay}>
        <Skeleton className="progress-bar-skeleton" animationDelay={animationDelay} />
      </Skeleton>
    </span>
  </Container>
);

export default MovieCard;
