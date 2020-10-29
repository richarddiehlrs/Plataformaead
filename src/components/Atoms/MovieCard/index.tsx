import React from 'react';

import MovieInterface from 'models/Movies';

import { Container } from './syles';

interface MovieCardProps {
  movie: MovieInterface;
  movieViewType: string;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie, movieViewType }) => (
  <Container type={movieViewType}>
    <img src={movie.thumburl} alt={movie.movieid} />
    <div className="progress-bar-wrapper">
      <div className="progress-bar" />
    </div>
    <p>{movie.title}</p>
  </Container>
);

export default MovieCard;
