import React, { useCallback } from 'react';
import AwesomeSlider from 'react-awesome-slider';

import CategoryInterface from 'models/Category';
import { useAuth } from 'hooks/auth';

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
  const { updateMoviesView, moviesTypeView } = useAuth();

  const handleChangeMovieTypeView = useCallback((categoryTitle: string) => {
    updateMoviesView(categoryTitle);
  }, [updateMoviesView]);

  if (!isLoading) {
    return (
      <>
        {categories.map((category, index) => (
          <Container key={category.id}>
            <CategoryTitle>
              <h3>{category.title}</h3>
              <p>{`(${category.movies.length})`}</p>
              <h4>
                VER TODOS
              </h4>
              <div className="teste">
                <button type="button" onClick={() => handleChangeMovieTypeView(category.title)}>Mudar modo de visulização</button>
              </div>
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
                    movieViewType={moviesTypeView[index + 1] ? Object.keys(moviesTypeView[index + 1])[0] === category.title ? Object.values(moviesTypeView[index + 1])[0] : 'thin' : 'thin'}
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
