import React from 'react';

import MovieInterface from 'models/Movies';

import { Container } from './syles';

interface MovieCardProps {
  movie: MovieInterface;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => (
  <Container>
    <img src={movie.thumburl} alt={movie.movieid} />
    <div className="progress-bar-wrapper">
      <div className="progress-bar" />
    </div>
    <p>{movie.movieid}</p>
  </Container>
);

export default MovieCard;
