import React, { useEffect, useState, useCallback } from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

import api from 'services/api';
import MoviesInterface from 'models/Movies';

import MovieContainer from 'components/Mols/MovieContainer';

import {
  Container, CarouselWrapper,
} from './styles';

const Cursos: React.FC = () => {
  const [movies, setMovies] = useState<MoviesInterface[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const getAllMovies = useCallback(async () => {
    setIsLoading(true);
    const response = await api.get<MoviesInterface[]>('/movie/all');
    setIsLoading(false);

    setMovies(response.data);
  }, []);

  useEffect(() => {
    getAllMovies();
  }, [getAllMovies]);

  return (
    <Container>
      <CarouselWrapper>
        <AwesomeSlider
          animation="foldOutAnimation"
          className="slider-container"
          organicArrows
          bullets={false}
        >
          <div>
            <MovieContainer movies={movies} isLoading={isLoading} />
          </div>
        </AwesomeSlider>
      </CarouselWrapper>
    </Container>
  );
};

export default Cursos;
