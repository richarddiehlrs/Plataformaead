import React from 'react';
import { FiChevronRight, FiCheck } from 'react-icons/fi';

import ExercisePreviewCard from 'components/Atoms/ExercisePreviewCard';

import {
  Container, VideoCardWrapper, SelectedIconContainer, VideoInfo,
} from './styles';

interface VideoCardProsp{
  isWatching?: boolean;
  alreadyWatched?: boolean;
  exercisePreviewActive?: boolean;
}

const VideoCard: React.FC<VideoCardProsp> = ({
  isWatching = false,
  alreadyWatched = false,
  exercisePreviewActive = false,
}) => (
  <Container>
    <VideoCardWrapper>
      <SelectedIconContainer>
        {isWatching && (<FiChevronRight size={22} />)}
        {alreadyWatched && (
        <div className="checked-container">
          <FiCheck className="checked" size={22} color="#ffd35c" style={{ fontWeight: 'bolder' }} />
        </div>
        )}
      </SelectedIconContainer>
      <img src="https://kanto.legiaodosherois.com.br/w760-h398-gnw-cfill-q80/wp-content/uploads/2020/03/legiao_nY1sQCx90KB2dGLcWrM354mIJfFaHApgNwO7qlUzZk.jpg.jpeg" alt="thumb" />
      <VideoInfo>
        <h3>1. Pronomes pessoais I</h3>
        <p>01/09 Professora Marlene</p>
      </VideoInfo>
    </VideoCardWrapper>
    {exercisePreviewActive && (
      <ExercisePreviewCard />
    )}
  </Container>
);

export default VideoCard;
