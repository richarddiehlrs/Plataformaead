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
  const videoProgress = useMemo(() => {
    if (video) {
      const videoDuration = video.videoduration;
      if (video && video.schoollevelsubjectseasonclassuser
        && video.schoollevelsubjectseasonclassuser.videowatched) {
        const timeWatched = video.schoollevelsubjectseasonclassuser.videowatched;
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
        return progress;
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
          start={videoProgress || 0}
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
