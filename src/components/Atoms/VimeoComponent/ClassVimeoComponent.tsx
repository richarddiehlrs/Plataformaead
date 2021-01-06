import React, {
  useEffect, useCallback, useMemo, useState,
} from 'react';
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
  const [isMounted, setIsMounted] = useState(false);
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
    if (isMounted) {
      onPause ? onPause(info) : console.log('info');
    }
  }, [onPause, isMounted]);

  const handleEndVideo = useCallback((info: any) => {
    if (isMounted) {
      onFinish ? onFinish(info) : console.log('end');
    }
  }, [onFinish, isMounted]);

  const handleProgressVideo = useCallback((info: any) => { }, []);

  useEffect(() => {
    setIsMounted(true);

    return () => setIsMounted(false);
  }, []);

  return (
    <Container large={large}>
      {url && (
      <Vimeo
        video={url || ' '}
        onPause={((info) => handlePauseVideo(info))}
        onEnd={((info) => handleEndVideo(info))}
        onTimeUpdate={handleProgressVideo}
        start={timeToStart}
        style={{
          width: '100%',
        }}
        responsive
        autoplay={autoPlay}
      />
      )}
      {/* {url && !autoPlay && (
        <>
          {console.log('2')}
          <Vimeo
            video={url || ' '}
            onPause={((info) => handlePauseVideo(info))}
            onEnd={((info) => handleEndVideo(info))}
            onTimeUpdate={handleProgressVideo}
            start={timeToStart}
            style={{
              width: '100%',
            }}
            responsive
            autoplay={false}
          />

        </>
      )} */}
    </Container>
  );
};

export default VimeoComponent;
