import React, { useCallback } from 'react';
import Vimeo from '@u-wave/react-vimeo';

import { SchoolLiveClasses } from 'models/SchoolModels';

import { Container } from './styles';

interface ViemoComponentProps {
  url?: string;
  large?: boolean;
  width?: string;
  height?: string;
  video?: SchoolLiveClasses;
  onPause?(info: any): void;
  onFinish?(info: any): void;
}

const VimeoComponent: React.FC<ViemoComponentProps> = ({
  url, large = false, width, height, video, onPause, onFinish,
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
            width: width || '100%',
            height: height || '100%',
          }}
          responsive
          autoplay={false}
        />
      )}
    </Container>
  );
};

export default VimeoComponent;
