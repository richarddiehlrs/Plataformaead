import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import AwesomeSlider from 'react-awesome-slider';

import CategoryInterface from 'models/Category';

import CourseContainer from 'components/Mols/CourseContainer';
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
        {categories.map((category, index) => (
          <Container key={category.id} position={index}>
            <CategoryTitle>
              <h3>{category.title}</h3>
              <p>{`(${category.courses.length})`}</p>
              <Link to={`/categorycourses/${category.id}/${category.title}`}>
                <h4>VER TODOS</h4>
                <FiChevronRight size={20} />
              </Link>
            </CategoryTitle>
            <CarouselWrapper className={category.title}>
              <AwesomeSlider
                animation="foldOutAnimation"
                className="slider-container"
                // organicArrows={false}
                bullets={false}
                transitionDelay={10}
              >
                <div>
                  <CourseContainer
                    courseViewType={category.type}
                    courses={category.courses}
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
