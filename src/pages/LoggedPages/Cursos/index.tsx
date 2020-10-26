import React, { useEffect, useState } from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

import api from 'services/api';
import MoviesInterface from 'models/Movies';

import MovieContainer from 'components/mols/MovieContainer';

import {
  Container, CarouselWrapper,
} from './styles';

const Cursos: React.FC = () => {
  const [movies, setMovies] = useState<MoviesInterface[]>([]);

  useEffect(() => {
    api.get('/movie/all').then((response) => {
      setMovies(response.data);
    });
  }, []);

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
            <MovieContainer movies={movies} />
          </div>
        </AwesomeSlider>
      </CarouselWrapper>
    </Container>
  );
};

export default Cursos;
