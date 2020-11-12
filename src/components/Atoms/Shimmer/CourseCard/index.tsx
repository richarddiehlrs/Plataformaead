import React from 'react';

import Skeleton from 'components/Skeleton';
import { Container } from './styles';

interface ShimmerCourseCard {
  courseViewType: string;
  animationDelay?: number;
}

const CourseCard: React.FC<ShimmerCourseCard> = ({ courseViewType, animationDelay }) => (
  <Container type={courseViewType}>
    <Skeleton className="bg-skeleton" animationDelay={animationDelay} />
    <span>
      <Skeleton className="progress-bar-wrapper-skeleton" animationDelay={animationDelay}>
        <Skeleton className="progress-bar-skeleton" animationDelay={animationDelay} />
      </Skeleton>
    </span>
  </Container>
);

export default CourseCard;
