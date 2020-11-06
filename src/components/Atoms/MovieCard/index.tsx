import React from 'react';

import MovieInterface from 'models/Movies';

import { FlexContainer, Container } from './syles';

interface MovieCardProps {
  movie: MovieInterface;
  movieViewType: string;
  customClass?: string
}

const MovieCard: React.FC<MovieCardProps> = ({ movie, movieViewType, customClass }) => (
  <FlexContainer className={`${customClass || ''}`}>
    <Container type={movieViewType}>
      <img src={movie.thumburl} alt={movie.movieid} />
      <div className="progress-bar-wrapper ">
        <div className="progress-bar " />
      </div>
      <p>{movie.title}</p>
    </Container>
  </FlexContainer>
);

export default MovieCard;
