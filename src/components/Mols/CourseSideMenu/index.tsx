import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';

import VideoCard from 'components/Atoms/VideoCard';
import Dropdown from 'components/Atoms/Dropdown';

import Separator from 'components/Atoms/Separator';
import {
  Container, Heading, Content, FilterContainer, VideosScrollContainer,
} from './styles';

const CourseSideMenu: React.FC = () => {
  const { goBack } = useHistory();

  return (
    <Container>
      <h3>
        {' '}
        <FiArrowLeft size={16} onClick={goBack} />
        Nome da matéria
      </h3>
      <Heading>
        <img src="https://kanto.legiaodosherois.com.br/w760-h398-gnw-cfill-q80/wp-content/uploads/2020/03/legiao_nY1sQCx90KB2dGLcWrM354mIJfFaHApgNwO7qlUzZk.jpg.jpeg" alt="thumb" />
        <Separator customWidth={40} customColor="#000" type="horizontal" />
        <p>descricao</p>
      </Heading>
      <Content>
        <FilterContainer>
          <p>Selecione para alterar</p>
          <Dropdown
            title="Selecionar aula"
            items={[
              { key: 'Java', value: 'java' },
              { key: 'C', value: 'c' }]}
          />
        </FilterContainer>
        <VideosScrollContainer className="hasVerticalScroll">
          <VideoCard isWatching exercisePreviewActive />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
        </VideosScrollContainer>
      </Content>
    </Container>
  );
};

export default CourseSideMenu;
