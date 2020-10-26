import React, { useMemo } from 'react';

import MovieCard from 'components/atoms/MovieCard';
import MovieInterface from 'models/Movies';

import { Container } from './styles';

interface MovieContainerProps {
  movies: Array<MovieInterface>;
}

const MovieContainer: React.FC<MovieContainerProps> = ({ movies }) => {
  const sixMovies = useMemo(() => movies.map((movie, index) => index < 6 && movie), [movies]);

  return (
    <Container>
      {sixMovies.map((movie) => movie && (
        <MovieCard
          key={movie.movieid}
          movie={movie}
        />
      ))}
    </Container>
  );
};

export default MovieContainer;
