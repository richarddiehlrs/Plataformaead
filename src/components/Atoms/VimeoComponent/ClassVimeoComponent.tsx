import React, {
  useEffect, useCallback, useMemo, useRef, Dispatch, SetStateAction,
} from 'react';
import ReactPlayer from 'react-player/vimeo';

import { SchoolLevelSubjectSeasonClasses } from 'models/SchoolModels';

import { Container } from './styles';

interface VimeoComponentProps {
  url?: string;
  large?: boolean;
  video?: SchoolLevelSubjectSeasonClasses;
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

const VimeoComponent: React.FC<VimeoComponentProps> = ({
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

  const vimeoPlayerRef = useRef<any>(null);

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
    vimeoPlayerRef.current?.seekTo(timeToStart);
  }, [timeToStart]);

  return (
    <Container large={large}>
      {url && !isLoading && (
      <ReactPlayer
        url={url}
        playing={isPlaying}
        progressInterval={2500}
        start={timeToStart}
        autoPlay={autoPlay}
        width="100%"
        height="100%"
        controls
        config={{
          playerOptions: {
            autopause: !autoPlay,
            autoplay: autoPlay,
          },
          onSeek: timeToStart,
        }}
        ref={vimeoPlayerRef}
        onPause={((info: any) => handlePauseVideo(info))}
        onEnded={((info: any) => handleEndVideo(info))}
        onProgress={(e: any) => handleProgressVideo(e)}
      />
      )}
    </Container>
  );
};

export default VimeoComponent;
