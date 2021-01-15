import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import { SchoolLiveClasses } from 'models/SchoolModels';

import {
  Container,
  VideoCardWrapper,
  SelectedIconContainer,
  Thumb,
  Time,
  VideoInfo,
} from './styles';

interface VideoCardProps {
  isWatching?: boolean;
  alreadyWatched?: boolean;
  exercisePreviewActive?: boolean;
  video: SchoolLiveClasses;
  onSelect(video: SchoolLiveClasses): void;
}

const VideoCard: React.FC<VideoCardProps> = ({
  isWatching = false,
  alreadyWatched = false,
  video,
  onSelect,
}) => (
  <Container>
    <VideoCardWrapper onClick={() => onSelect(video)}>
      <SelectedIconContainer>
        {(isWatching) && (<FiChevronRight size={22} />)}
        {/* {(alreadyWatched) && (
        <div className="checked-container">
          <FiCheck className="checked" size={22} color="#ffd35c" style={{ fontWeight: 'bolder' }} />
        </div>
        )} */}
      </SelectedIconContainer>
      <Thumb>
        <img src={video.thumb} className="video-thumb" alt={video.classid} />
        <Time><p>{video.videoduration}</p></Time>
      </Thumb>
      <VideoInfo>
        <h3>{video.title}</h3>
        <p>{video.description}</p>
      </VideoInfo>
    </VideoCardWrapper>
  </Container>
);

export default VideoCard;
