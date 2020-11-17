import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import { Container, SelectedIconContainer, VideoInfo } from './styles';

interface VideoCardProsp{
  isWatching?: boolean;
}

const VideoCard: React.FC<VideoCardProsp> = ({ isWatching = false }) => (
  <Container>
    <SelectedIconContainer>
      {isWatching && (<FiChevronRight size={20} />)}
    </SelectedIconContainer>
    <img src="https://kanto.legiaodosherois.com.br/w760-h398-gnw-cfill-q80/wp-content/uploads/2020/03/legiao_nY1sQCx90KB2dGLcWrM354mIJfFaHApgNwO7qlUzZk.jpg.jpeg" alt="thumb" />
    <VideoInfo>
      <h3>1. Pronomes pessoais I</h3>
      <p>01/09 Professora Marlene</p>
    </VideoInfo>
  </Container>
);

export default VideoCard;
