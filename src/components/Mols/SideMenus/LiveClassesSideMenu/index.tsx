import React, { useCallback } from 'react';
import { FiVideo } from 'react-icons/fi';

import { SchoolLiveClasses } from 'models/SchoolModels';

import Dropdown from 'components/Atoms/Dropdown';
import VideoCard from 'components/Atoms/VideoCard/ClassVideoCard';
import Separator from 'components/Atoms/Separator';

import ShimmerVideoCard from 'components/Atoms/Shimmer/VideoCard';

import {
  Container, Heading, LiveVideosList, LiveVideoItem, StyledButton, Content, FilterContainer, VideosScrollContainer,
} from './styles';

interface LiveClassesSideMenu {
  schoolLiveClasses?: Array<SchoolLiveClasses>;
  selectedPosition?: number;
  isLoading?: boolean;
  onLiveClassChange(item: any): void;
}

const LiveClassesSideMenu: React.FC<LiveClassesSideMenu> = ({
  schoolLiveClasses,
  selectedPosition = 0,
  isLoading = false,
  onLiveClassChange,
}) => {
  const videos = [0, 1, 2, 3, 4, 5, 6];

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
        {schoolLiveClasses
          && schoolLiveClasses[selectedPosition]
          && schoolLiveClasses[selectedPosition].schoollivelevelsubjectclasses.map((liveClass) => (
            <LiveVideoItem key={liveClass.classid}>
              <div>
                {console.log(schoolLiveClasses[selectedPosition])}
                <h4>
                  {liveClass.title}
                </h4>
                <p>{liveClass.description}</p>
              </div>
              <StyledButton onClick={() => handleOpenLiveClass(liveClass.url)}>
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
              items={schoolLiveClasses ? schoolLiveClasses.map((schoolLiveClass) => (
                { key: `${schoolLiveClass.position}`, value: schoolLiveClass.title }))
                : [{ key: '1', value: '1' }]}
              defaultValue={schoolLiveClasses
                && schoolLiveClasses[0] ? { key: `${schoolLiveClasses[0].position}`, value: schoolLiveClasses[0].subjectid }
                : { key: '', value: '' }}
              isLoading={false}
              size="small"
              onChange={(item) => onLiveClassChange(item)}
            />
          </div>
          <div className="date-selection">
            <Dropdown
              title="Selecione uma data"
              arrowColor="#ffff"
              textColor="#ffff"
              backgroundCollor="#171a21"
              customRadius={30}
              items={[{ key: '1', value: '1' }]}
              isLoading={false}
              size="small"
              onChange={(item) => onLiveClassChange(item)}
            />
          </div>
        </FilterContainer>
        <VideosScrollContainer className="hasVerticalScroll">
          {videos.length > 0 && !isLoading && videos.map((video) => (
            // <VideoCard
            //   key={video.classid}
            //   video={video}
            //   onSelect={onVideoChange}
            //   isWatching={video.position === selectedPosition}
            //   exercisePreviewActive={video.exerciseshortmessage !== ' '}
            // />
            <p key={video}>salve</p>
          ))}
          {isLoading && (
            <>
              <ShimmerVideoCard />
              <ShimmerVideoCard />
              <ShimmerVideoCard />
              <ShimmerVideoCard />
            </>
          )}
        </VideosScrollContainer>
      </Content>
    </Container>
  );
};

export default LiveClassesSideMenu;
