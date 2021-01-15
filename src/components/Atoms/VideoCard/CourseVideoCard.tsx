import React, { useMemo } from 'react';
import { FiChevronRight } from 'react-icons/fi';

import { CourseSeasonMovie } from 'models/CourseModels';

import ExercisePreviewCard from 'components/Atoms/ExercisePreviewCard';
import ProgressBar from 'components/Atoms/ProgressBar';

import hasNotesIcon from 'assets/icons/hasNotes.png';

import {
  Container,
  VideoCardWrapper,
  SelectedIconContainer,
  Thumb,
  AnnotationIndicator,
  Time,
  StyledProgressBar,
  VideoInfo,
} from './styles';

interface VideoCardProps {
  isWatching?: boolean;
  alreadyWatched?: boolean;
  exercisePreviewActive?: boolean;
  video: CourseSeasonMovie;
  onSelect(position: number): void;
}

const VideoCard: React.FC<VideoCardProps> = ({
  isWatching = false,
  alreadyWatched = false,
  exercisePreviewActive = false,
  video,
  onSelect,
}) => {
  // const [localAlreadyWatched, setLocalAlreadyWatched] = useState(false);

  const videoProgress = useMemo(() => {
    const videoDuration = video.videoduration;
    if (video && video.courseseasonmovieuser
      && video.courseseasonmovieuser.videowatched) {
      const timeWatched = video.courseseasonmovieuser.videowatched;
      let vdHours; let vdMinutes; let vdSeconds;
      let totalSeconds;
      let progress = 0;

      const [twHours, twMinutes, twSeconds] = timeWatched.split(':');
      const secondsWatched = (Number(twHours) * 60 * 60) + Number(twMinutes) * 60 + Number(twSeconds);

      if (videoDuration.split(':').length > 2) {
        [vdHours, vdMinutes, vdSeconds] = videoDuration.split(':');
        totalSeconds = Number(vdHours) * 60 * 60 + Number(vdMinutes) * 60 + Number(vdSeconds);
      } else {
        [vdMinutes, vdSeconds] = videoDuration.split(':');
        totalSeconds = Number(vdMinutes) * 60 + Number(vdSeconds);
      }
      progress = Math.round(((secondsWatched * 100) / totalSeconds));
      // progress >= 98 && setLocalAlreadyWatched(true);
      return progress;
    }
    return 0;
  },
  [video]);

  return (
    <Container>
      <VideoCardWrapper onClick={() => { onSelect(video.position); }}>
        <SelectedIconContainer>
          {(isWatching) && (<FiChevronRight size={22} />)}
          {/* {(alreadyWatched || localAlreadyWatched) && (
            <div className="checked-container">
              <FiCheck className="checked" size={22} color="#ffd35c" style={{ fontWeight: 'bolder' }} />
            </div>
          )} */}
        </SelectedIconContainer>
        <Thumb>
          {video.notes.length > 0 && (
            <AnnotationIndicator>
              <img src={hasNotesIcon} alt="has-notes-icon" />
            </AnnotationIndicator>
          )}
          <img className="video-thumb" src={video.thumb} alt={video.movieid} />
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
        <ExercisePreviewCard description={video.exerciseshortmessage} />
      )}
    </Container>
  );
};

export default VideoCard;
