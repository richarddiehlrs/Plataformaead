import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
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
              <Link to={`/movies/${category.id}`}>
                <h4>VER TODOS</h4>
                <FiChevronRight size={20} />
              </Link>
            </CategoryTitle>
            <CarouselWrapper className={category.title}>
              <AwesomeSlider
                animation="foldOutAnimation"
                className="slider-container"
                organicArrows
                bullets={false}
              >
                <div>
                  <MovieContainer
                    movieViewType={category.type}
                    movies={category.movies}
                    isLoading={isLoading}
                  />
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
