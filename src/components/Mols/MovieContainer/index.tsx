import React, { useMemo } from 'react';

import MovieCard from 'components/Atoms/MovieCard';
import ShimmerMovieCard from 'components/Atoms/Shimmer/MovieCard';

import MovieInterface from 'models/Movies';

import { Container } from './styles';

interface MovieContainerProps {
  movies: Array<MovieInterface>;
  isLoading: boolean;
}

const MovieContainer: React.FC<MovieContainerProps> = ({ movies, isLoading }) => {
  const sixMovies = useMemo(() => movies.map((movie, index) => index < 6 && movie), [movies]);

  return (
    <>
      {!isLoading ? (
        <Container>
          {sixMovies.map((movie) => movie && (
            <MovieCard
              key={movie.movieid}
              movie={movie}
            />
          ))}
        </Container>
      )
        : (
          <Container>
            <ShimmerMovieCard />
            <ShimmerMovieCard />
            <ShimmerMovieCard />
            <ShimmerMovieCard />
            <ShimmerMovieCard />
          </Container>
        )}
    </>
  );
};

export default MovieContainer;
