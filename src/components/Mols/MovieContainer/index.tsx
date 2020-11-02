import React, { useMemo } from 'react';

import MovieCard from 'components/Atoms/MovieCard';
import ShimmerMovieCard from 'components/Atoms/Shimmer/MovieCard';

import MovieInterface from 'models/Movies';

import { Container } from './styles';

interface MovieContainerProps {
  movies: Array<MovieInterface>;
  isLoading: boolean;
  movieViewType?: string;
}

const MovieContainer: React.FC<MovieContainerProps> = ({ movies, movieViewType = 'thin', isLoading }) => {
  const sixMovies = useMemo(() => movies.map((movie, index) => index < 10 && movie), [movies]);

  return (
    <>
      {!isLoading ? (
        <Container>
          {sixMovies.map((movie, index) => movie && (
            <MovieCard
              key={movie.movieid}
              movie={movie}
              movieViewType={movieViewType}
            />
          ))}
        </Container>
      )
        : (
          <Container>
            <ShimmerMovieCard movieViewType="thin" />
            <ShimmerMovieCard animationDelay={0.3 * 0} movieViewType="thin" />
            <ShimmerMovieCard animationDelay={0.3 * 1} movieViewType="thin" />
            <ShimmerMovieCard animationDelay={0.3 * 2} movieViewType="thin" />
            <ShimmerMovieCard animationDelay={0.3 * 3} movieViewType="thin" />
            <ShimmerMovieCard animationDelay={0.3 * 4} movieViewType="thin" />
            <ShimmerMovieCard animationDelay={0.3 * 5} movieViewType="thin" />
            <ShimmerMovieCard animationDelay={0.3 * 6} movieViewType="thin" />
            <ShimmerMovieCard animationDelay={0.3 * 7} movieViewType="thin" />
            <ShimmerMovieCard animationDelay={0.3 * 8} movieViewType="thin" />
            <ShimmerMovieCard animationDelay={0.3 * 9} movieViewType="thin" />
            <ShimmerMovieCard animationDelay={0.3 * 10} movieViewType="thin" />
          </Container>
        )}
    </>
  );
};

export default MovieContainer;
