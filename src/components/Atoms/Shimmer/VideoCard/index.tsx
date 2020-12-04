import React from 'react';

import {
  Container, Thumb, Title, Description, VideoInfo,
} from './styles';

const VideoCard: React.FC = () => (
  <Container>
    <Thumb />
    <VideoInfo>
      <Title />
      <Description size={60} />
      <Description size={100} />
      <Description size={80} />
    </VideoInfo>
  </Container>
);

export default VideoCard;
