import React, { useEffect, useCallback, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from 'services/api';
import { Course as CourseInterface } from 'models/CourseModels';
import { useAuth } from 'hooks/auth';

import CourseCard from 'components/Atoms/CourseCard';
import ShimmerCourseCard from 'components/Atoms/Shimmer/CourseCard';
import PaginationComponent from 'components/Atoms/PaginationComponent';
import Skeleton from 'components/Skeleton';

import {
  Wrapper, Container, Heading, FooterContainer,
} from './styles';

interface CategoryCourseParams {
  categoryId: string;
  categoryName: string;
}

interface CategoryCourseListDTO {
  categorycourseList: Array<CourseInterface>;
  pages: number;
}

const CategoryCourses: React.FC = () => {
  const [courses, setCourses] = useState<CourseInterface[]>([]);
  const [totalPages, setTotalPages] = useState(0);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const totalShimmer = [0, 1, 2, 3, 4, 5];

  const { user } = useAuth();
  const { categoryId, categoryName } = useParams() as CategoryCourseParams;
  const { goBack } = useHistory();

  const getCategoryCourses = useCallback(async (pageNumber?: number) => {
    setIsLoading(true);
    const { data } = await api.get<CategoryCourseListDTO>(`/course/category?userid=${user.userid}&categoryid=${categoryId}&page=${pageNumber || 0}`);
    const { pages, categorycourseList } = data;
    setCourses(categorycourseList);
    setTotalPages(pages);
    setIsLoading(false);
  }, [categoryId, user]);

  const handleChangePage = useCallback((pageNumber: number) => {
    setPage(pageNumber);
    getCategoryCourses(pageNumber - 1);
  }, [setPage, getCategoryCourses]);

  useEffect(() => {
    getCategoryCourses();
  }, [getCategoryCourses]);

  return (
    <Wrapper>
      <Heading>
        <FiArrowLeft size={20} onClick={() => goBack()} />
        {courses.length > 0 && (
          <h3>
            {categoryName}
            <strong>{`(${courses.length})`}</strong>
          </h3>
        )}
        {isLoading && (<Skeleton className="category-title" />)}
      </Heading>
      <Container>
        {!isLoading && courses ? courses.map((course) => (
          <CourseCard key={course.courseid} course={course} courseViewType="category" customClass="flex-item" />
        )) : (
          <>
            {totalShimmer.map((item, index) => (
              <ShimmerCourseCard key={item} animationDelay={index * 0.3} courseViewType="category" />

            ))}
          </>
        )}
      </Container>
      <FooterContainer>
        {!isLoading && (
          <PaginationComponent setPage={handleChangePage} totalPages={totalPages} page={page} />
        )}
      </FooterContainer>
    </Wrapper>
  );
};

export default CategoryCourses;
