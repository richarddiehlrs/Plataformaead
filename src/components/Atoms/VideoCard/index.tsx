import React, { useMemo } from 'react';
import { FiChevronRight, FiCheck } from 'react-icons/fi';

import CourseSeasonMovie from 'models/CourseSeasonMovie';

import ExercisePreviewCard from 'components/Atoms/ExercisePreviewCard';
import ProgressBar from 'components/Atoms/ProgressBar';

import {
  Container, VideoCardWrapper, SelectedIconContainer, Thumb, Time, StyledProgressBar, VideoInfo,
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
  const videoProgress = useMemo(() => {
    const videoDuration = video.videoduration;
    const timeWatched = video.courseseasonmovieuser.videowatched;

    let vdHours; let vdMinutes; let vdSeconds;
    let totalSeconds;

    const [twHours, twMinutes, twSeconds] = timeWatched.split(':');
    const secondsWatched = (Number(twHours) * 60 * 60) + Number(twMinutes) * 60 + Number(twSeconds);

    if (videoDuration.split(':').length > 2) {
      [vdHours, vdMinutes, vdSeconds] = videoDuration.split(':');
      totalSeconds = Number(vdHours) * 60 * 60 + Number(vdMinutes) * 60 + Number(vdSeconds);
      return Math.round(((secondsWatched * 100) / totalSeconds));
    }
    [vdMinutes, vdSeconds] = videoDuration.split(':');
    totalSeconds = Number(vdMinutes) * 60 + Number(vdSeconds);
    return Math.round(((secondsWatched * 100) / totalSeconds));
  }, [video]);

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
        <Thumb>
          <img src={video.thumb} alt={video.courseid_seasonid_movieid} />
          <Time><p>{video.videoduration}</p></Time>
          <StyledProgressBar>
            <ProgressBar at={videoProgress} customHeight={4} />
          </StyledProgressBar>
        </Thumb>
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
