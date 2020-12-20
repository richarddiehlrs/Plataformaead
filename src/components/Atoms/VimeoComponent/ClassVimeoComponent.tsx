import React, { useCallback, useMemo } from 'react';
import Vimeo from '@u-wave/react-vimeo';

import { SchoolLevelSubjectSeasonClasses } from 'models/SchoolModels';

import { Container } from './styles';

interface ViemoComponentProps {
  url?: string;
  large?: boolean;
  video?: SchoolLevelSubjectSeasonClasses;
  onPause?(info: any): void;
  onFinish?(info: any): void;
}

const VimeoComponent: React.FC<ViemoComponentProps> = ({
  url, large = false, video, onPause, onFinish,
}) => {
  const timeToStart = useMemo(() => {
    if (video) {
      if (video.schoollevelsubjectseasonclassuser
        && video.schoollevelsubjectseasonclassuser.videowatched) {
        const timeWatched = video.schoollevelsubjectseasonclassuser.videowatched;
        const [twHours, twMinutes, twSeconds] = timeWatched.split(':');

        const totalSeconds = Number(twHours) * 60 * 60 + Number(twMinutes) * 60 + Number(twSeconds);

        return totalSeconds;
      }
    }
    return 0;
  },
  [video]);

  const autoPlay = useMemo(() => timeToStart > 0, [timeToStart]);

  const handlePauseVideo = useCallback(async (info: any) => {
    console.log(info);
  }, []);

  const handleEndVideo = useCallback((info: any) => { }, []);

  const handleProgressVideo = useCallback((info: any) => { }, []);

  return (
    <Container large={large}>
      {url && autoPlay && (
        <Vimeo
          video={url || ' '}
          onPause={onPause || ((info) => handlePauseVideo(info))}
          onEnd={onFinish || ((info) => handleProgressVideo(info))}
          onTimeUpdate={handleProgressVideo}
          start={timeToStart}
          style={{
            width: '100%',
          }}
          responsive
          autoplay
        />
      )}
      {url && !autoPlay && (
        <Vimeo
          video={url || ' '}
          onPause={onPause || ((info) => handlePauseVideo(info))}
          onEnd={onFinish || ((info) => handleEndVideo(info))}
          onTimeUpdate={handleProgressVideo}
          start={timeToStart}
          style={{
            width: '100%',
          }}
          responsive
          autoplay={false}
        />
      )}
    </Container>
  );
};

export default VimeoComponent;
