import React, { useMemo } from 'react';

import CourseCard from 'components/Atoms/CourseCard';
import ShimmerCourseCard from 'components/Atoms/Shimmer/CourseCard';

import CourseInterface from 'models/Course';

import { Container } from './styles';

interface CourseContainerProps {
  courses: Array<CourseInterface>;
  isLoading: boolean;
  courseViewType?: string;
}

const CourseContainer: React.FC<CourseContainerProps> = ({ courses, courseViewType = 'vertical', isLoading }) => {
  const sixCourses = useMemo(() => courses.map((course, index) => index < 10 && course), [courses]);

  return (
    <>
      {!isLoading ? (
        <Container className="a">
          {sixCourses.map((course, index) => course && (
            <CourseCard
              key={course.courseid}
              course={course}
              courseViewType={courseViewType}
            />
          ))}
        </Container>
      )
        : (
          <Container>
            <ShimmerCourseCard courseViewType="vertical" />
            <ShimmerCourseCard animationDelay={0.3 * 0} courseViewType="vertical" />
            <ShimmerCourseCard animationDelay={0.3 * 1} courseViewType="vertical" />
            <ShimmerCourseCard animationDelay={0.3 * 2} courseViewType="vertical" />
            <ShimmerCourseCard animationDelay={0.3 * 3} courseViewType="vertical" />
            <ShimmerCourseCard animationDelay={0.3 * 4} courseViewType="vertical" />
            <ShimmerCourseCard animationDelay={0.3 * 5} courseViewType="vertical" />
            <ShimmerCourseCard animationDelay={0.3 * 6} courseViewType="vertical" />
            <ShimmerCourseCard animationDelay={0.3 * 7} courseViewType="vertical" />
            <ShimmerCourseCard animationDelay={0.3 * 8} courseViewType="vertical" />
            <ShimmerCourseCard animationDelay={0.3 * 9} courseViewType="vertical" />
            <ShimmerCourseCard animationDelay={0.3 * 10} courseViewType="vertical" />
          </Container>
        )}
    </>
  );
};

export default CourseContainer;
