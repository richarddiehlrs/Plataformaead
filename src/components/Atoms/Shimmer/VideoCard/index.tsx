import React from 'react';

import {
  Container, Thumb, Title, Description, VideoInfo,
} from './styles';

interface VideoCardProps{
  type?: string;
}

const VideoCard: React.FC<VideoCardProps> = ({ type = 'normal' }) => (
  <Container>
    <Thumb />
    <VideoInfo>
      <Title size={type === 'small' ? 130 : 220} />
      <Description size={type === 'small' ? 60 : 60} />
      <Description size={type === 'small' ? 50 : 100} />
      <Description size={type === 'small' ? 95 : 80} />
    </VideoInfo>
  </Container>
);

export default VideoCard;
