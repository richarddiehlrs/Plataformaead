import React, { useEffect, useState } from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

import api from '../../../services/api';
import MoviesInterface from '../../../models/Movies';

import {
  Container, CarouselWrapper, MovieWrapper, MovieCard,
} from './styles';

const Cursos: React.FC = () => {
  const [movies, setMovies] = useState<MoviesInterface[]>([]);
  console.log(movies);

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
          <MovieWrapper>
            <MovieCard>
              <img src="https://avatars0.githubusercontent.com/u/53842905?s=460&u=e3ed01c01307e54599f5a8d7e38c99571a365b5f&v=4" alt="me" />
              <div className="progress-bar-wrapper">
                <div className="progress-bar" />
              </div>
              <p>Movie name</p>
            </MovieCard>
            <MovieCard>
              <img src="https://avatars0.githubusercontent.com/u/53842905?s=460&u=e3ed01c01307e54599f5a8d7e38c99571a365b5f&v=4" alt="me" />
              <div className="progress-bar-wrapper">
                <div className="progress-bar" />
              </div>
              <p>Movie name</p>
            </MovieCard>
            <MovieCard>
              <img src="https://avatars0.githubusercontent.com/u/53842905?s=460&u=e3ed01c01307e54599f5a8d7e38c99571a365b5f&v=4" alt="me" />
              <div className="progress-bar-wrapper">
                <div className="progress-bar" />
              </div>
              <p>Movie name</p>
            </MovieCard>
          </MovieWrapper>
        </AwesomeSlider>
      </CarouselWrapper>
    </Container>
  );
};

export default Cursos;
