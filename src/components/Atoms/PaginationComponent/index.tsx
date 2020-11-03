import React from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import { Container } from './styles';

interface PaginationComponentProps {
  setPage(pageNumber: number): void;
  totalPages: number;
  page: number;
}

const PaginationComponent: React.FC<PaginationComponentProps> = ({ setPage, totalPages, page }) => (
  <Container>
    {page - 1 !== 0 ? (
      <FiChevronLeft className="pageBack" size={20} onClick={() => { setPage(page - 1); }} />
    )
      : <div className="blankspace" />}
    <p>
      {page}
    </p>
    {page !== totalPages ? (
      <FiChevronRight className="pageNext" size={20} onClick={() => { setPage(page + 1); }} />
    )
      : <div className="blankspace" />}
  </Container>
);

export default PaginationComponent;
