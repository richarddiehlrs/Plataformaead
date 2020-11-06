import React, { useEffect, useState, useCallback } from 'react';

import { useAuth } from 'hooks/auth';
import api from 'services/api';
import CategoryInterface from 'models/Category';

import CategoryContainer from 'components/Mols/CategoryContainer';

import { Container } from './styles';

const Cursos: React.FC = () => {
  const [categories, setCategories] = useState<CategoryInterface[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const { user } = useAuth();

  const getAllCategories = useCallback(async () => {
    setIsLoading(true);
    const response = await api.get<CategoryInterface[]>(`/movie?userid=${user.userid}`);
    setIsLoading(false);

    setCategories(response.data);
  }, [user.userid]);

  useEffect(() => {
    getAllCategories();
  }, [getAllCategories]);

  return (
    <Container>
      <CategoryContainer
        categories={categories}
        isLoading={isLoading}
      />
    </Container>
  );
};

export default Cursos;
