import React, {
  useCallback, useMemo, useRef, useEffect,
} from 'react';
import ReactPlayer from 'react-player/vimeo';
// import Vimeo from '@u-wave/react-vimeo';

import { CourseSeasonMovie } from 'models/CourseModels';

import { Container } from './styles';

interface ViemoComponentProps {
  url?: string;
  large?: boolean;
  video?: CourseSeasonMovie;
  isPlaying?: boolean;
  isLoading?: boolean;
  onPause?(info: any): void;
  onFinish?(info: any): void;
}

const VimeoComponent: React.FC<ViemoComponentProps> = ({
  url, large = false, video, onPause, onFinish, isPlaying, isLoading,
}) => {
  const vimeoPlayerReff = useRef<any>(null);

  const timeToStart = useMemo(() => {
    if (video) {
      if (video.courseseasonmovieuser
        && video.courseseasonmovieuser.videowatched) {
        const timeWatched = video.courseseasonmovieuser.videowatched;
        const [twHours, twMinutes, twSeconds] = timeWatched.split(':');

        const totalSeconds = Number(twHours) * 60 * 60 + Number(twMinutes) * 60 + Number(twSeconds);

        return totalSeconds;
      }
    }
    return 0;
  },
  [video]);

  const autoPlay = useMemo(() => timeToStart > 0, [timeToStart]);

  const handlePauseVideo = useCallback((info: any) => {
    console.log('pause');
    onPause ? onPause(info) : console.log('info');
  }, [onPause]);

  const handleEndVideo = useCallback((info: any) => { }, []);

  const handleProgressVideo = useCallback((info: any) => { }, []);

  useEffect(() => {
    vimeoPlayerReff.current?.seekTo(timeToStart);
  }, [timeToStart]);

  return (
    <Container large={large}>
      {url && (
        <ReactPlayer
          url={url}
          playing={isPlaying}
          width="100%"
          height="100%"
          progressInterval={5000}
          start={timeToStart}
          autoPlay={autoPlay}
          controls
          config={{
            vimeo: {
              playerOptions: {
                autopause: !autoPlay,
                autoplay: autoPlay,
              },
              onSeek: timeToStart,
            },
          }}
          ref={vimeoPlayerReff}
          onPause={((info: any) => handlePauseVideo(info))}
          onEnded={((info: any) => handleEndVideo(info))}
          onProgress={(e: any) => handleProgressVideo(e)}
        />
      )}
    </Container>
  );
};

export default VimeoComponent;
