import React from 'react';
import AwesomeSlider from 'react-awesome-slider';

import CategoryInterface from 'models/Category';

import MovieContainer from 'components/Mols/MovieContainer';
import ShimmerCategoryContainer from 'components/Mols/Shimmer/CategoryContainer';

import { Container, CategoryTitle, CarouselWrapper } from './styles';

interface CategoryContainerProps {
  categories: Array<CategoryInterface>;
  isLoading: boolean;
}

const CategoryContainer: React.FC<CategoryContainerProps> = (
  { categories, isLoading },
) => {
  if (!isLoading) {
    return (
      <>
        {categories.map((category) => (

          <Container key={category.id}>
            <CategoryTitle>
              <h3>{category.title}</h3>
              <p>{`(${category.movies.length})`}</p>
            </CategoryTitle>
            <CarouselWrapper className={category.title}>
              <AwesomeSlider
                animation="foldOutAnimation"
                className="slider-container"
                organicArrows
                bullets={false}
              >
                <div>
                  <MovieContainer movies={category.movies} isLoading={isLoading} />
                </div>
              </AwesomeSlider>
            </CarouselWrapper>
          </Container>
        ))}
      </>
    );
  }
  return (
    <>
      <ShimmerCategoryContainer />
      <ShimmerCategoryContainer />
      <ShimmerCategoryContainer />
    </>
  );
};

export default CategoryContainer;
