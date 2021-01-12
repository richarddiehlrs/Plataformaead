import React, { useCallback } from 'react';
import { FiVideo } from 'react-icons/fi';

import { SchoolLiveSubjects, SchoolLiveClasses } from 'models/SchoolModels';

import Dropdown from 'components/Atoms/Dropdown';
import VideoCard from 'components/Atoms/VideoCard/LiveClassVideoCard';
import Separator from 'components/Atoms/Separator';

import ShimmerVideoCard from 'components/Atoms/Shimmer/VideoCard';

import {
  Container, Heading, LiveVideosList, LiveVideoItem, StyledButton, Content, FilterContainer, VideosScrollContainer,
} from './styles';

interface LiveClassesSideMenu {
  schoolLiveClassesSubjects?: Array<SchoolLiveSubjects>;
  recordedLiveClasses?: Array<SchoolLiveClasses>;
  liveClasses?: Array<SchoolLiveClasses>,
  filters?: Array<string>;
  firstFilter?: { key: string, value: string };
  selectedSubjectPosition?: number;
  selectedVideoPostition?: string;
  isLoading?: boolean;
  onClassChange(video: SchoolLiveClasses): void;
  onLiveClassChange(item: any): void;
  onFilterChage(item: any): void;
}

const LiveClassesSideMenu: React.FC<LiveClassesSideMenu> = ({
  schoolLiveClassesSubjects,
  recordedLiveClasses,
  liveClasses,
  filters,
  firstFilter,
  selectedSubjectPosition = 0,
  selectedVideoPostition = 0,
  isLoading = false,
  onClassChange,
  onLiveClassChange,
  onFilterChage,
}) => {
  const handleOpenLiveClass = useCallback((url: string) => {
    window.open(url, '_blank');
  }, []);

  return (
    <Container>
      <Heading>
        <FiVideo size={40} />
        <p>Aulas ao vivo</p>
      </Heading>
      <LiveVideosList className="hasVerticalScroll">
        {liveClasses?.map((recordedLiveClass) => (
          <LiveVideoItem key={recordedLiveClass.classid}>
            <div>
              <h4>
                {recordedLiveClass.title}
              </h4>
              <p>{recordedLiveClass.description}</p>
            </div>
            <StyledButton noShaddow onClick={() => handleOpenLiveClass(recordedLiveClass.url)}>
              LIVE
              <FiVideo size={20} />
            </StyledButton>
          </LiveVideoItem>
        ))}
      </LiveVideosList>
      <Separator type="horizontal" />
      <Content>
        <FilterContainer>
          <div className="subject-selection">
            <p>Selecione a matéria</p>
            <Dropdown
              title="Escolha a matéria"
              arrowColor="#ffd35c"
              textColor="#ffd35c"
              items={schoolLiveClassesSubjects
                ? schoolLiveClassesSubjects.map((schoolLiveClassSubject) => (
                  { key: `${schoolLiveClassSubject.position}`, value: schoolLiveClassSubject.title }))
                : [{ key: '1', value: '1' }]}
              defaultValue={schoolLiveClassesSubjects
                && schoolLiveClassesSubjects[0] ? { key: `${schoolLiveClassesSubjects[0].position}`, value: schoolLiveClassesSubjects[0].subjectid }
                : { key: '', value: '' }}
              isLoading={false}
              size="small"
              onChange={(item) => onLiveClassChange(item)}
            />
          </div>
          <div className="date-selection">
            <p>Filtre por datas</p>
            {!isLoading && filters && (
              <Dropdown
                title="Selecione uma data"
                arrowColor="#ffff"
                textColor="#ffff"
                backgroundCollor="#171a21"
                customHeight={40}
                customRadius={30}
                items={filters ? filters.map((filter) => ({ key: filter, value: filter })) : [{ key: '1', value: '1' }]}
                defaultValue={firstFilter}
                isLoading={false}
                size="small"
                onChange={(item) => onFilterChage(item)}
              />
            )}
          </div>
        </FilterContainer>
        <VideosScrollContainer className="hasVerticalScroll">
          {!isLoading && recordedLiveClasses && recordedLiveClasses.map((video) => (
            <VideoCard
              key={video.classid}
              video={video}
              onSelect={onClassChange}
              isWatching={selectedVideoPostition === video.classid}
            />
          ))}
          {isLoading && (
            <>
              <ShimmerVideoCard type="small" />
              <ShimmerVideoCard type="small" />
              <ShimmerVideoCard type="small" />
              <ShimmerVideoCard type="small" />
            </>
          )}
        </VideosScrollContainer>
      </Content>
    </Container>
  );
};

export default LiveClassesSideMenu;
