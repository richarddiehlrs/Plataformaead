import React, {
  createContext,
  useCallback,
  useState,
  useContext,
} from 'react';

import { convertSecondsToHoursMinutesSeconds } from 'utils/functions';

interface ProgressContextData {
  setVideos(videos: any): void;
  clearVideos(): void;
  setProgress(video: any, time: any): void;
  videos: any;
}

const ProgressContext = createContext<ProgressContextData>({} as ProgressContextData);

export const ProgressProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<any>(() => {
    const videos = localStorage.getItem('@NextLevel:videos');

    if (videos) {
      return JSON.parse(videos);
    }

    return {};
  });

  const setVideos = useCallback((videos: Array<any>) => {
    if (videos) {
      let updatedData = {};

      videos.forEach((video) => {
        const time = video.schoollevelsubjectseasonclassuser
          && video.schoollevelsubjectseasonclassuser.videowatched
          && video.schoollevelsubjectseasonclassuser.videowatched;
        updatedData = { ...updatedData, [`${video.url}`]: time };
      });

      localStorage.setItem('@NextLevel:videos', JSON.stringify(updatedData));
      setData(updatedData);
    }
  }, []);

  const clearVideos = useCallback(() => { }, []);

  const setProgress = useCallback((video: any, time: any) => {
    if (time !== -1) {
      const updatedData = data;
      updatedData[video] = convertSecondsToHoursMinutesSeconds(time);
      localStorage.setItem('@NextLevel:videos', JSON.stringify(updatedData));
      setData(updatedData);
    }
  }, [data]);

  return (
    <ProgressContext.Provider
      value={{
        videos: data, setVideos, setProgress, clearVideos,
      }}
    >
      {children}
    </ProgressContext.Provider>
  );
};

export function useProgress(): ProgressContextData {
  const context = useContext(ProgressContext);

  return context;
}
