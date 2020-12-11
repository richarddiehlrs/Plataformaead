import React, { useCallback, useMemo } from 'react';
import Vimeo from '@u-wave/react-vimeo';

import { SchoolLevelSubjectSeasonClasses } from 'models/SchoolModels';

import { Container } from './styles';

interface ViemoComponentProps {
  url?: string;
  large?: boolean;
  video?: SchoolLevelSubjectSeasonClasses;
}

const VimeoComponent: React.FC<ViemoComponentProps> = ({ url, large = false, video }) => {
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

  const showCurrentTime = useCallback((info: any) => { }, []);

  const handleEndVideo = useCallback((info: any) => { }, []);

  const handleProgressVideo = useCallback((info: any) => { }, []);

  return (
    <Container large={large}>
      {url && (
        <Vimeo
          video={url || ' '}
          onPause={(info) => showCurrentTime(info)}
          onEnd={(info) => handleEndVideo(info)}
          onTimeUpdate={(info) => handleProgressVideo(info)}
          start={timeToStart || 0}
          style={{
            width: '100%',
          }}
          responsive
        />
      )}
    </Container>
  );
};

export default VimeoComponent;
