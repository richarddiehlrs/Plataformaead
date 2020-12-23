import React, { useMemo, useState } from 'react';
import { FiChevronRight, FiCheck } from 'react-icons/fi';

import { SchoolLiveLevelSubjectClasses } from 'models/SchoolModels';

import ExercisePreviewCard from 'components/Atoms/ExercisePreviewCard';
import ProgressBar from 'components/Atoms/ProgressBar';

import {
  Container, VideoCardWrapper, SelectedIconContainer, Thumb, Time, StyledProgressBar, VideoInfo,
} from './styles';

interface VideoCardProps {
  isWatching?: boolean;
  alreadyWatched?: boolean;
  exercisePreviewActive?: boolean;
  video: SchoolLiveLevelSubjectClasses;
  onSelect(position: number): void;
}

const VideoCard: React.FC<VideoCardProps> = ({
  isWatching = false,
  alreadyWatched = false,
  exercisePreviewActive = false,
  video,
  onSelect,
}) => {
  const [localAlreadyWatched, setLocalAlreadyWatched] = useState(false);

  return (
    <Container>
      {/* <VideoCardWrapper onClick={() => { onSelect(video.position); }}> */}
      <VideoCardWrapper onClick={() => console.log('oi')}>
        <SelectedIconContainer>
          {(isWatching) && (<FiChevronRight size={22} />)}
          {(alreadyWatched || localAlreadyWatched) && (
            <div className="checked-container">
              <FiCheck className="checked" size={22} color="#ffd35c" style={{ fontWeight: 'bolder' }} />
            </div>
          )}
        </SelectedIconContainer>
        <Thumb>
          <img src={video.thumb} alt={video.classid} />
          <Time><p>{video.videoduration}</p></Time>
          <StyledProgressBar>
            <ProgressBar at={0} customHeight={4} />
          </StyledProgressBar>
        </Thumb>
        <VideoInfo>
          <h3>{video.title}</h3>
          <p>{video.description}</p>
        </VideoInfo>
      </VideoCardWrapper>
    </Container>
  );
};

export default VideoCard;
