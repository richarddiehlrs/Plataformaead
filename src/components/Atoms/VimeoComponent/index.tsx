import React, { useCallback } from 'react';
import Vimeo from '@u-wave/react-vimeo';

import { Container } from './styles';

interface ViemoComponentProps {
  url?: string;
  large?: boolean;
}

const VimeoComponent: React.FC<ViemoComponentProps> = ({ url, large = false }) => {
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
          start={0}
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
