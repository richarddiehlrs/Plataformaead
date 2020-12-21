import React from 'react';
import { FiVideo } from 'react-icons/fi';

import Dropdown from 'components/Atoms/Dropdown';
import VideoCard from 'components/Atoms/VideoCard/ClassVideoCard';

import ShimmerVideoCard from 'components/Atoms/Shimmer/VideoCard';

import {
  Container, Heading, LiveVideosList, Content, FilterContainer, VideosScrollContainer,
} from './styles';

const LiveClassesSideMenu: React.FC = () => {
  let i;
  const videos = [0];
  const isLoading = false;
  console.log(i);

  return (
    <Container>
      <Heading>
        <FiVideo size={40} />
        <p>Aulas ao vivo</p>
      </Heading>
      <LiveVideosList className="hasVerticalScroll">

      </LiveVideosList>
      <Content>
        <FilterContainer>
          <p>Selecione a matéria</p>
          <Dropdown
            title="Escolha a matéria"
            arrowColor="#ffd35c"
            textColor="#ffd35c"
            items={[{ key: '1', value: '1' }]}
            defaultValue={{ key: '', value: '' }}
            isLoading={false}
            onChange={(item) => console.log(item)}
          />
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
            <p>salve</p>
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
