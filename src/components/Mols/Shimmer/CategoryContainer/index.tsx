import React from 'react';

import AwesomeSlider from 'react-awesome-slider';

import MovieContainer from 'components/Mols/MovieContainer';

import { Container, CategoryTitle, CarouselWrapper } from 'components/Mols/CategoryContainer/styles';

const CategoryContainer: React.FC = () => (
  <Container>
    <CategoryTitle>
    </CategoryTitle>
    <CarouselWrapper>
      <AwesomeSlider
        animation="foldOutAnimation"
        className="slider-container"
        organicArrows
        bullets={false}
      >
        <div>
          <MovieContainer movies={[]} isLoading />
        </div>
      </AwesomeSlider>
    </CarouselWrapper>
  </Container>
);

export default CategoryContainer;
