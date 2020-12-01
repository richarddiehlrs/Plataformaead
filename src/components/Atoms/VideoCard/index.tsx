import React from 'react';
import { FiChevronRight, FiCheck } from 'react-icons/fi';

import CourseSeasonMovie from 'models/CourseSeasonMovie';

import ExercisePreviewCard from 'components/Atoms/ExercisePreviewCard';

import {
  Container, VideoCardWrapper, SelectedIconContainer, VideoInfo,
} from './styles';

interface VideoCardProsp{
  isWatching?: boolean;
  alreadyWatched?: boolean;
  exercisePreviewActive?: boolean;
  video: CourseSeasonMovie;
}

const VideoCard: React.FC<VideoCardProsp> = ({
  isWatching = false,
  alreadyWatched = false,
  exercisePreviewActive = false,
  video,
}) => {
  console.log(video);

  return (
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
        <img src={video.thumb} alt={video.courseid_seasonid_movieid} />
        <VideoInfo>
          <h3>{video.title}</h3>
          <p>{video.description}</p>
        </VideoInfo>
      </VideoCardWrapper>
      {exercisePreviewActive && (
        <ExercisePreviewCard />
      )}
    </Container>
  );
};

export default VideoCard;
