import React, {
  useCallback, useMemo, useRef, useEffect, Dispatch, SetStateAction,
} from 'react';
import ReactPlayer from 'react-player/vimeo';
// import Vimeo from '@u-wave/react-vimeo';

import { CourseSeasonMovie } from 'models/CourseModels';

import { Container } from './styles';

interface ViemoComponentProps {
  url?: string;
  large?: boolean;
  video?: CourseSeasonMovie;
  isLoading?: boolean;
  isPlaying?: boolean;
  actualTime?: {
    playedSeconds: number;
    played: number;
    loadedSeconds: number;
    loaded: number;
  };
  setActualTime?: Dispatch<SetStateAction<{
    playedSeconds: number;
    played: number;
    loadedSeconds: number;
    loaded: number;
  }>> | false;
  onPause?(info: any): void;
  onFinish?(info: any): void;
}

const VimeoComponent: React.FC<ViemoComponentProps> = ({
  url,
  large = false,
  video,
  isLoading,
  isPlaying,
  actualTime,
  setActualTime,
  onPause,
  onFinish,
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
    if (actualTime && actualTime.playedSeconds > timeToStart) {
      onPause ? onPause(info) : console.log('info');
    }
  }, [onPause, actualTime, timeToStart]);

  const handleEndVideo = useCallback((info: any) => {
    onFinish ? onFinish(info) : console.log('end');
  }, [onFinish]);

  const handleProgressVideo = useCallback((info: any) => {
    setActualTime && setActualTime(info);
  }, [setActualTime]);

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
          progressInterval={1300}
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
