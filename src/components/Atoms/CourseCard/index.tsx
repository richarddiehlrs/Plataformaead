import React from 'react';

import CourseInterface from 'models/Course';

import { FlexContainer, Container } from './syles';

interface CourseCardProps {
  course: CourseInterface;
  courseViewType: string;
  customClass?: string
}

const CourseCard: React.FC<CourseCardProps> = ({ course, courseViewType, customClass }) => (
  <FlexContainer className={`${customClass || ''}`}>
    <Container type={courseViewType}>
      <img src={course.thumburl} alt={course.courseid} />
      <div className="progress-bar-wrapper ">
        <div className="progress-bar " />
      </div>
      <p>{course.title}</p>
    </Container>
  </FlexContainer>
);

export default CourseCard;
