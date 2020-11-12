import React, { useEffect, useCallback, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from 'services/api';
import MovieInterface from 'models/Movies';
import { useAuth } from 'hooks/auth';

import MovieCard from 'components/Atoms/MovieCard';
import ShimmerMovieCard from 'components/Atoms/Shimmer/MovieCard';
import PaginationComponent from 'components/Atoms/PaginationComponent';
import Skeleton from 'components/Skeleton';

import {
  Wrapper, Container, Heading, FooterContainer,
} from './styles';

interface CategoryMoviesParams {
  categoryId: string;
  categoryName: string;
}

interface CategoryMovieListDTO {
  categorymovieList: Array<MovieInterface>;
  pages: number;
}

const CategoryMovies: React.FC = () => {
  const [movies, setMovies] = useState<MovieInterface[]>([]);
  const [totalPages, setTotalPages] = useState(0);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const totalShimmer = [0, 1, 2, 3, 4, 5];

  const { user } = useAuth();
  const { categoryId, categoryName } = useParams() as CategoryMoviesParams;
  const { goBack } = useHistory();

  const getCategoryMovies = useCallback(async (pageNumber?: number) => {
    setIsLoading(true);
    const { data } = await api.get<CategoryMovieListDTO>(`/movie/category?userid=${user.userid}&categoryid=${categoryId}&page=${pageNumber || 0}`);
    const { pages, categorymovieList } = data;
    setMovies(categorymovieList);
    setTotalPages(pages);
    setIsLoading(false);
  }, [categoryId, user]);

  const handleChangePage = useCallback((pageNumber: number) => {
    setPage(pageNumber);
    getCategoryMovies(pageNumber - 1);
  }, [setPage, getCategoryMovies]);

  useEffect(() => {
    getCategoryMovies();
  }, [getCategoryMovies]);

  return (
    <Wrapper>
      <Heading>
        <FiArrowLeft size={20} onClick={() => goBack()} />
        {movies.length > 0 && (
          <p>{`${categoryName} ( ${movies.length} )`}</p>
        )}
        {isLoading && (<Skeleton className="category-title" />)}
      </Heading>
      <Container>
        {!isLoading && movies ? movies.map((movie) => (
          <MovieCard key={movie.movieid} movie={movie} movieViewType="category" customClass="flex-item" />
        )) : (
          <>
            {totalShimmer.map((item, index) => (
              <ShimmerMovieCard key={item} animationDelay={index * 0.3} movieViewType="category" />

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

export default CategoryMovies;
