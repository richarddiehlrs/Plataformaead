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

const MovieContainer: React.FC<MovieContainerProps> = ({ movies, movieViewType = 'vertical', isLoading }) => {
  const sixMovies = useMemo(() => movies.map((movie, index) => index < 10 && movie), [movies]);

  return (
    <>
      {!isLoading ? (
        <Container className="a">
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
            <ShimmerMovieCard movieViewType="vertical" />
            <ShimmerMovieCard animationDelay={0.3 * 0} movieViewType="vertical" />
            <ShimmerMovieCard animationDelay={0.3 * 1} movieViewType="vertical" />
            <ShimmerMovieCard animationDelay={0.3 * 2} movieViewType="vertical" />
            <ShimmerMovieCard animationDelay={0.3 * 3} movieViewType="vertical" />
            <ShimmerMovieCard animationDelay={0.3 * 4} movieViewType="vertical" />
            <ShimmerMovieCard animationDelay={0.3 * 5} movieViewType="vertical" />
            <ShimmerMovieCard animationDelay={0.3 * 6} movieViewType="vertical" />
            <ShimmerMovieCard animationDelay={0.3 * 7} movieViewType="vertical" />
            <ShimmerMovieCard animationDelay={0.3 * 8} movieViewType="vertical" />
            <ShimmerMovieCard animationDelay={0.3 * 9} movieViewType="vertical" />
            <ShimmerMovieCard animationDelay={0.3 * 10} movieViewType="vertical" />
          </Container>
        )}
    </>
  );
};

export default MovieContainer;
