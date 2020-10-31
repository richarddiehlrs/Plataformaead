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
            <ShimmerMovieCard animationDelay={0.3 * 0} movieViewType={movieTypeView} />
            <ShimmerMovieCard animationDelay={0.3 * 1} movieViewType={movieTypeView} />
            <ShimmerMovieCard animationDelay={0.3 * 2} movieViewType={movieTypeView} />
            <ShimmerMovieCard animationDelay={0.3 * 3} movieViewType={movieTypeView} />
            <ShimmerMovieCard animationDelay={0.3 * 4} movieViewType={movieTypeView} />
            <ShimmerMovieCard animationDelay={0.3 * 5} movieViewType={movieTypeView} />
            <ShimmerMovieCard animationDelay={0.3 * 6} movieViewType={movieTypeView} />
            <ShimmerMovieCard animationDelay={0.3 * 7} movieViewType={movieTypeView} />
            <ShimmerMovieCard animationDelay={0.3 * 8} movieViewType={movieTypeView} />
            <ShimmerMovieCard animationDelay={0.3 * 9} movieViewType={movieTypeView} />
            <ShimmerMovieCard animationDelay={0.3 * 10} movieViewType={movieTypeView} />
          </Container>
        )}
    </>
  );
};

export default MovieContainer;
