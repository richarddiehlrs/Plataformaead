import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';

import VideoCard from 'components/Atoms/VideoCard';
import Dropdown from 'components/Atoms/Dropdown';
// import ProgressBar from 'components/Atoms/ProgressBar';

import Separator from 'components/Atoms/Separator';
import {
  Container, Heading, CustomHeading, Content, FilterContainer, VideosScrollContainer,
} from './styles';

interface CourseSideMenuProps {
  customType?: string;
}

const CourseSideMenu: React.FC<CourseSideMenuProps> = ({ customType }) => {
  const { goBack } = useHistory();

  return (
    <Container customType={customType}>
      <Heading>
        {customType === 'recordedClasses' ? (
          <>
            <h3>
              {' '}
              <FiArrowLeft size={16} onClick={goBack} />
              Aulas gravadas
            </h3>
            <CustomHeading>
              <p>Reveja quando quiser!</p>
              <div>
                <p>Aqui vai o select horizontal</p>
              </div>
            </CustomHeading>
          </>
        )
          : (
            <>
              <h3>
                {' '}
                <FiArrowLeft size={16} onClick={goBack} />
                Nome da matéria
              </h3>
              <img src="https://kanto.legiaodosherois.com.br/w760-h398-gnw-cfill-q80/wp-content/uploads/2020/03/legiao_nY1sQCx90KB2dGLcWrM354mIJfFaHApgNwO7qlUzZk.jpg.jpeg" alt="thumb" />
              <Separator customWidth={40} customColor="#000" type="horizontal" />
              <p>descricao</p>
            </>
          )}

      </Heading>
      <Content>
        <FilterContainer>
          {customType !== 'recordedClasses' ? (
            <>
              <p>Selecione para alterar</p>
              <Dropdown
                title="Selecionar aula"
                items={[
                  { key: 'Java', value: 'java' },
                  { key: 'C', value: 'c' }]}
              />
            </>
          ) : (
            <>
              <Dropdown
                title="Escolha"
                arrowColor="#ffd35c"
                textColor="#ffd35c"
                items={[
                  { key: 'Java', value: 'java' },
                  { key: 'C', value: 'c' }]}
              />
            </>
          )}
        </FilterContainer>
        <VideosScrollContainer className="hasVerticalScroll">
          <VideoCard alreadyWatched />
          <VideoCard alreadyWatched />
          <VideoCard alreadyWatched />
          <VideoCard isWatching exercisePreviewActive />
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
