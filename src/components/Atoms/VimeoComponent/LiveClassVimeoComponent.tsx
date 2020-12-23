import React, { useCallback, useMemo } from 'react';
import Vimeo from '@u-wave/react-vimeo';

import { SchoolLiveLevelSubjectClasses } from 'models/SchoolModels';

import { Container } from './styles';

interface ViemoComponentProps {
  url?: string;
  large?: boolean;
  video?: SchoolLiveLevelSubjectClasses;
  onPause?(info: any): void;
  onFinish?(info: any): void;
}

const VimeoComponent: React.FC<ViemoComponentProps> = ({
  url, large = false, video, onPause, onFinish,
}) => {
  const handlePauseVideo = useCallback(async (info: any) => {
    console.log(info);
  }, []);

  const handleEndVideo = useCallback((info: any) => { }, []);

  const handleProgressVideo = useCallback((info: any) => { }, []);

  return (
    <Container large={large}>
      {url && (
        <Vimeo
          video={url || ' '}
          onPause={onPause || ((info) => handlePauseVideo(info))}
          onEnd={onFinish || ((info) => handleEndVideo(info))}
          onTimeUpdate={handleProgressVideo}
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
