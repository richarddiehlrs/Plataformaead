import React from 'react';

import AwesomeSlider from 'react-awesome-slider';

import CourseContainer from 'components/Mols/CourseContainer';
import Skeleton from 'components/Skeleton';

import { Container, CategoryTitle, CarouselWrapper } from 'components/Mols/CategoryContainer/styles';

const CategoryContainer: React.FC = () => (
  <Container>
    <CategoryTitle>
      <Skeleton className="category-title" />
    </CategoryTitle>
    <CarouselWrapper>
      <AwesomeSlider
        animation="foldOutAnimation"
        className="slider-container"
        organicArrows
        bullets={false}
      >
        <div>
          <CourseContainer courses={[]} isLoading />
        </div>
      </AwesomeSlider>
    </CarouselWrapper>
  </Container>
);

export default CategoryContainer;
