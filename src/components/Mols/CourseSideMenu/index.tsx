import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';

// import CourseSeasonMovie from 'models/CourseSeasonMovie';
import { SchoolLevel, SchoolLevelSubjectSeasonClasses } from 'models/SchoolModels';

import VideoCard from 'components/Atoms/VideoCard';
import ShimmerVideoCard from 'components/Atoms/Shimmer/VideoCard';
import Dropdown from 'components/Atoms/Dropdown';
import HorizontalSelect from 'components/Mols/HorizontalSelect';
// import ProgressBar from 'components/Atoms/ProgressBar';

import Separator from 'components/Atoms/Separator';
import {
  Container,
  Heading,
  CustomHeading,
  HorizontalSelectContainer,
  Content,
  FilterContainer,
  VideosScrollContainer,
} from './styles';

interface SelectItems {
  key: string;
  value: string;
}

interface CourseSideMenuProps {
  customType?: string;
  levelIdOptions?: Array<SchoolLevel>;
  subjectOptions?: Array<SelectItems>;
  subjectSeasonOptions?: Array<SelectItems>
  firstItem?: SelectItems;
  isLoading?: boolean;
  hasLevelIdSelected?: boolean;
  hasSubjectSelected?: boolean;
  videos?: Array<SchoolLevelSubjectSeasonClasses>;
  selectedPosition?: number;
  selectedSchoolLevel?: string;
  onLevelIdChange?(item: any): void;
  onSubjectChange?(item: any): void;
  onSubjectSeasonChange?(item: any): void;
  onVideoChange?(position: number): void;
}

const CourseSideMenu: React.FC<CourseSideMenuProps> = (
  {
    customType,
    levelIdOptions = [],
    subjectOptions = [{ key: '', value: '' }],
    subjectSeasonOptions = [{ key: '', value: '' }],
    firstItem = { key: '', value: '' },
    isLoading = false,
    hasLevelIdSelected = false,
    hasSubjectSelected = false,
    videos = [],
    selectedPosition = 0,
    selectedSchoolLevel = '',
    onLevelIdChange = () => console.log('default'),
    onSubjectChange = () => console.log('default'),
    onSubjectSeasonChange = () => console.log('default'),
    onVideoChange = () => console.log('default'),
  },
) => {
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
              <HorizontalSelectContainer isLoading={isLoading}>
                <HorizontalSelect
                  options={levelIdOptions && levelIdOptions.map((levelIdOption) => ({ key: levelIdOption.levelid, value: levelIdOption.title }))}
                  onChange={onLevelIdChange}
                  selectedValue={selectedSchoolLevel}
                  isLoading={isLoading}
                />
              </HorizontalSelectContainer>
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
                items={subjectOptions}
                defaultValue={isLoading ? { key: '', value: '' } : firstItem}
                isLoading={isLoading}
                onChange={onSubjectChange}
              />
            </>
          ) : (
            <>
              {!isLoading && hasLevelIdSelected && (
              <>
                <p>Selecione a matéria</p>
                <Dropdown
                  title="Escolha a matéria"
                  arrowColor="#ffd35c"
                  textColor="#ffd35c"
                  items={subjectOptions}
                  defaultValue={isLoading ? { key: '', value: '' } : firstItem}
                  isLoading={isLoading}
                  onChange={onSubjectChange}
                />
                <p style={{ marginTop: 12 }}>Selecione a aula</p>
                {subjectSeasonOptions.length > 0 && (
                  <Dropdown
                    title="Escolha a aula"
                    arrowColor="#ffd35c"
                    textColor="#ffd35c"
                    items={subjectSeasonOptions}
                    defaultValue={isLoading ? { key: '', value: '' } : subjectSeasonOptions[0]}
                    isLoading={isLoading}
                    onChange={onSubjectSeasonChange}
                  />
                )}
              </>
              )}
            </>
          )}
        </FilterContainer>
        <VideosScrollContainer className="hasVerticalScroll">
          {videos.length > 0 && videos.map((video) => (
            <VideoCard
              key={video.classid}
              video={video}
              onSelect={onVideoChange}
              isWatching={video.position === selectedPosition}
            />
          ))}
          {videos.length < 1 && hasLevelIdSelected && hasSubjectSelected && (
            <>
              <ShimmerVideoCard />
              <ShimmerVideoCard />
              <ShimmerVideoCard />
              <ShimmerVideoCard />
              <ShimmerVideoCard />
            </>
          )}
          {/*
          <VideoCard alreadyWatched />
          <VideoCard alreadyWatched />
          <VideoCard alreadyWatched />
          <VideoCard isWatching exercisePreviewActive />
          <VideoCard />
          */}
        </VideosScrollContainer>
      </Content>
    </Container>
  );
};

export default CourseSideMenu;
