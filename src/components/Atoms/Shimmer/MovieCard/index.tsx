import React from 'react';

import Skeleton from 'components/Skeleton';
import { Container } from './styles';

interface ShimmerMovieCard {
  movieViewType: string;
}

const MovieCard: React.FC<ShimmerMovieCard> = ({ movieViewType }) => (
  <Container type={movieViewType}>
    <Skeleton className="bg-skeleton" />
    <span>
      <Skeleton className="progress-bar-wrapper-skeleton">
        <Skeleton className="progress-bar-skeleton" />
      </Skeleton>
    </span>
  </Container>
);

export default MovieCard;
