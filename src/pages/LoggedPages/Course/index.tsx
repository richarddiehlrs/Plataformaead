import React, { useEffect, useCallback, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAuth } from 'hooks/auth';

import api from 'services/api';
import { convertSecondsToHoursMinutesSeconds } from 'utils/functions';
import { CourseSeason, CourseSeasonMovie, Course as CourseModel } from 'models/CourseModels';

import AnnotationCard from 'components/Atoms/AnnotationCard';
import VimeoComponent from 'components/Atoms/VimeoComponent/CourseVimeoComponent';
import CourseSideMenu from 'components/Mols/CourseSideMenu';

import {
  Container, Content, VideoContainer, AnnotationsContainer,
} from './styles';

interface Params {
  courseid: string;
}

const Course: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [courseDetails, setCourseDetails] = useState<CourseModel>();
  const [selectedVideoPosition, setSelectedVideoPosition] = useState(0);

  const [courseSeasons, setCourseSeasons] = useState<CourseSeason[]>([]);
  const [courseSeasonMovies, setCourseSeasonMovies] = useState<CourseSeasonMovie[]>([]);

  const [selectedSeason, setSelectedSeason] = useState({ key: '', value: '' });

  const { user } = useAuth();
  const params = useParams();
  const { courseid } = params as Params;

  const getCourseDetails = useCallback(async () => {
    setIsLoading(true);
    const response = await api.get<CourseModel>(`https://hdinsfdwwa.execute-api.sa-east-1.amazonaws.com/prod/course/info?courseid=${courseid}`);
    setCourseDetails(response.data);
    setIsLoading(false);
  }, [courseid]);

  const getCourseSeasons = useCallback(async () => {
    setIsLoading(true);
    const response = await api.get<CourseSeason[]>(`https://hdinsfdwwa.execute-api.sa-east-1.amazonaws.com/prod/course/season?courseid=${courseid}`);
    setCourseSeasons(response.data);
    setIsLoading(false);
  }, [courseid]);

  const getSeasonMovies = useCallback(async (item: any) => {
    setIsLoading(true);
    setSelectedSeason(item);
    const response = await api.get<CourseSeasonMovie[]>(`https://hdinsfdwwa.execute-api.sa-east-1.amazonaws.com/prod/course/season/movie?courseid=${courseid}&seasonid=${item.key}&userid=${user.userid}`);
    setCourseSeasonMovies(response.data);
    setIsLoading(false);
  }, [courseid, user]);

  const handlePauseVideo = useCallback(async (info) => {
    // const response = await api.post('https://hdinsfdwwa.execute-api.sa-east-1.amazonaws.com/prod/course/season/movie/user', {
    //   classid: courseSeasonMovies[selectedVideoPosition].classid,
    //   seasonid: courseSeasonMovies[selectedVideoPosition].seasonid,
    //   levelid: courseSeasonMovies[selectedVideoPosition].levelid,
    //   subjectid: courseSeasonMovies[selectedVideoPosition].subjectid,
    //   schoolid: courseSeasonMovies[selectedVideoPosition].schoolid,
    //   userid: user.userid,
    //   videowatched: convertSecondsToHoursMinutesSeconds(info.seconds),
    //   videostatus: 'watching' ou 'completed',
    //   exercisestatus: ' ',
    // });
    const a = {
      courseid: courseSeasonMovies[selectedVideoPosition].courseid,
      seasonid: courseSeasonMovies[selectedVideoPosition].seasonid,
      movieid: courseSeasonMovies[selectedVideoPosition].movieid,
      userid: user.userid,
      videostatus: 'watching',
      videowatched: convertSecondsToHoursMinutesSeconds(info.seconds),
      exercisestatus: ' ',
    };
    console.log(a);

    // console.log(response.data);
    // [courseSeasonMovies, selectedVideoPosition, user.userid]
  }, [courseSeasonMovies, selectedVideoPosition, user]);

  const handleFinishVideo = useCallback((info) => {
    handlePauseVideo(info);
  }, [handlePauseVideo]);

  useEffect(() => {
    getCourseSeasons();
    getCourseDetails();
  }, [getCourseSeasons, getCourseDetails]);

  return (
    <Container>
      <CourseSideMenu
        courseDetails={courseDetails}
        courseSeasonOptions={courseSeasons
          && courseSeasons.map((courseSeason) => (
            { key: courseSeason.seasonid, value: courseSeason.title }
          ))}
        firstItem={courseSeasons[0]
          && { key: courseSeasons[0].seasonid, value: courseSeasons[0].title }}
        videos={courseSeasonMovies || []}
        selectedPosition={selectedVideoPosition}
        isLoading={isLoading}
        onSeasonChange={(item) => getSeasonMovies(item)}
        onVideoChange={setSelectedVideoPosition}
      />
      <Content>
        <VideoContainer>
          <VimeoComponent
            large={courseSeasonMovies[selectedVideoPosition]
              && courseSeasonMovies[selectedVideoPosition].notes.length < 1}
            url={courseSeasonMovies[selectedVideoPosition]
              && courseSeasonMovies[selectedVideoPosition].url}
            video={courseSeasonMovies[selectedVideoPosition]}
            onPause={handlePauseVideo}
            onFinish={handleFinishVideo}
          />
        </VideoContainer>
        <AnnotationsContainer
          className="hasVerticalScroll"
          hasNotes={courseSeasonMovies[selectedVideoPosition]
            && courseSeasonMovies[selectedVideoPosition].notes.length > 0}
        >
          {courseSeasonMovies[selectedVideoPosition]
            && courseSeasonMovies[selectedVideoPosition].notes.length > 0
            && courseSeasonMovies[selectedVideoPosition].notes.map((note) => (
              <AnnotationCard
                key={note.courseid_seasonid_movieid_userid_noteid}
                time={note.noteid}
                description={note.message}
              />
            ))}
        </AnnotationsContainer>
      </Content>
    </Container>
  );
};

export default Course;
