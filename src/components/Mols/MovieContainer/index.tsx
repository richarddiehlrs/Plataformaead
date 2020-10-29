import React, { useMemo } from 'react';

import MovieCard from 'components/Atoms/MovieCard';
import ShimmerMovieCard from 'components/Atoms/Shimmer/MovieCard';

import MovieInterface from 'models/Movies';
import { useAuth } from 'hooks/auth';

import { Container } from './styles';

interface MovieContainerProps {
  movies: Array<MovieInterface>;
  isLoading: boolean;
}

const MovieContainer: React.FC<MovieContainerProps> = ({ movies, isLoading }) => {
  const sixMovies = useMemo(() => movies.map((movie, index) => index < 10 && movie), [movies]);
  const { movieTypeView } = useAuth();

  return (
    <>
      {!isLoading ? (
        <Container>
          {sixMovies.map((movie) => movie && (
            <MovieCard
              key={movie.movieid}
              movie={movie}
              movieViewType={movieTypeView}
            />
          ))}
        </Container>
      )
        : (
          <Container>
            <ShimmerMovieCard movieViewType={movieTypeView} />
            <ShimmerMovieCard movieViewType={movieTypeView} />
            <ShimmerMovieCard movieViewType={movieTypeView} />
            <ShimmerMovieCard movieViewType={movieTypeView} />
            <ShimmerMovieCard movieViewType={movieTypeView} />
            <ShimmerMovieCard movieViewType={movieTypeView} />
            <ShimmerMovieCard movieViewType={movieTypeView} />
            <ShimmerMovieCard movieViewType={movieTypeView} />
            <ShimmerMovieCard movieViewType={movieTypeView} />
          </Container>
        )}
    </>
  );
};

export default MovieContainer;
