import React from 'react';

import { Course as CourseInterface } from 'models/CourseModels';

import { Link } from 'react-router-dom';

import ProgressBar from 'components/Atoms/ProgressBar';

import { FlexContainer, Container } from './syles';

interface CourseCardProps {
  course: CourseInterface;
  courseViewType: string;
  customClass?: string
}

const CourseCard: React.FC<CourseCardProps> = ({ course, courseViewType, customClass }) => (
  <FlexContainer className={`${customClass || ''}`}>
    <Link to={`/course/${course.courseid}`}>
      <Container type={courseViewType}>
        <img src={course.thumburl} alt={course.courseid} />
        <ProgressBar at={course.userprogress * 100} />
        <p>{course.title}</p>
      </Container>
    </Link>
  </FlexContainer>
);

export default CourseCard;
