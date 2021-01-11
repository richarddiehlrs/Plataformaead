import React, {
  useEffect, useCallback, useState,
} from 'react';
import { useParams } from 'react-router-dom';
import { useAuth } from 'hooks/auth';

import api from 'services/api';
import { convertSecondsToHoursMinutesSeconds } from 'utils/functions';
import { CourseSeason, CourseSeasonMovie, Course as CourseModel } from 'models/CourseModels';
import { Notes } from 'models/AuthModels';

import AnnotationCard from 'components/Atoms/AnnotationCard';
import VimeoComponent from 'components/Atoms/VimeoComponent/CourseVimeoComponent';
import CourseSideMenu from 'components/Mols/SideMenus/CourseSideMenu';

import {
  Container, Content, VideoContainer, AnnotationsContainer,
} from './styles';

interface Params {
  courseid: string;
}

const Course: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [selectedVideoPosition, setSelectedVideoPosition] = useState(0);

  const [courseDetails, setCourseDetails] = useState<CourseModel>();
  const [courseSeasons, setCourseSeasons] = useState<CourseSeason[]>([]);
  const [courseSeasonMovies, setCourseSeasonMovies] = useState<CourseSeasonMovie[]>([]);

  const [notes, setNotes] = useState<Notes[]>([]);

  const { user } = useAuth();
  const params = useParams();
  const { courseid } = params as Params;

  const stablishCourseSeasonMovieNotes = useCallback(() => {
    if (courseSeasonMovies[selectedVideoPosition] && courseSeasonMovies[selectedVideoPosition].notes) {
      setNotes(courseSeasonMovies[selectedVideoPosition].notes);
    }
  }, [courseSeasonMovies, selectedVideoPosition]);

  //  https://hdinsfdwwa.execute-api.sa-east-1.amazonaws.com/prod/prod/course/season/movie/user

  /**
      courseid: "Programação"
      exercisestatus: " "
      movieid: "Introdução"
      seasonid: "Java"
      userid: "thiago.kraetzer"
      videostatus: "watching"
      videowatched: "00:03:31"
   *
   *
   *
   */

  const getCourseDetails = useCallback(async () => {
    setIsLoading(true);
    const response = await api.get<CourseModel>(`/course/info?courseid=${courseid}`);
    setCourseDetails(response.data);
    setIsLoading(false);
  }, [courseid]);

  const getCourseSeasons = useCallback(async () => {
    setIsLoading(true);
    const response = await api.get<CourseSeason[]>(`/course/season?courseid=${courseid}`);
    setCourseSeasons(response.data);
    setIsLoading(false);
  }, [courseid]);

  const getSeasonMovies = useCallback(async (item: any) => {
    setIsLoading(true);
    // setSelectedSeason(item);
    const response = await api.get<CourseSeasonMovie[]>(`/course/season/movie?courseid=${courseid}&seasonid=${item.key}&userid=${user.userid}`);
    setCourseSeasonMovies(response.data);
    setIsLoading(false);
  }, [courseid, user]);

  const handlePauseVideo = useCallback(async (info) => {
    const body = {
      courseid: courseSeasonMovies[selectedVideoPosition].courseid,
      seasonid: courseSeasonMovies[selectedVideoPosition].seasonid,
      movieid: courseSeasonMovies[selectedVideoPosition].movieid,
      userid: user.userid,
      videostatus: 'watching',
      videowatched: convertSecondsToHoursMinutesSeconds(info.seconds),
      exercisestatus: ' ',
    };
    const response = await api.post('/course/season/movie/user', body);

    console.log(`pause: ${response.data}`);
  }, [courseSeasonMovies, selectedVideoPosition, user]);

  const handleFinishVideo = useCallback((info) => {
    handlePauseVideo(info);
  }, [handlePauseVideo]);

  const handleDeleteNote = useCallback(async (noteId: string, index: number) => {
    await api.post('/course/season/movie/user/note/delete', {
      courseid: courseSeasonMovies[selectedVideoPosition].courseid,
      seasonid: courseSeasonMovies[selectedVideoPosition].seasonid,
      movieid: courseSeasonMovies[selectedVideoPosition].movieid,
      noteid: noteId,
      userid: user.userid,
    });
    const updatedNotes = notes.splice(index);
    updatedNotes.splice(index, 1);
    setNotes(updatedNotes);
  }, [user, courseSeasonMovies, selectedVideoPosition, notes]);

  useEffect(() => {
    getCourseSeasons();
    getCourseDetails();
    stablishCourseSeasonMovieNotes();
  }, [getCourseSeasons, getCourseDetails, stablishCourseSeasonMovieNotes]);

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
        onSeasonChange={(item) => {
          setIsPlaying(!isPlaying); setTimeout(() => { getSeasonMovies(item); }, 200);
        }}
        onVideoChange={(e) => {
          setIsPlaying(!isPlaying); setTimeout(() => { setSelectedVideoPosition(e); }, 200);
        }}
      />
      <Content>
        <VideoContainer>
          <VimeoComponent
            large={notes.length < 1}
            url={courseSeasonMovies[selectedVideoPosition]
              && courseSeasonMovies[selectedVideoPosition].url}
            video={courseSeasonMovies[selectedVideoPosition]}
            isPlaying={isPlaying}
            isLoading={isLoading}
            onPause={handlePauseVideo}
            onFinish={handleFinishVideo}
          />
        </VideoContainer>
        <AnnotationsContainer
          className="hasVerticalScroll"
          hasNotes={courseSeasonMovies[selectedVideoPosition]
            && courseSeasonMovies[selectedVideoPosition].notes.length > 0}
        >
          {notes.length > 0 && notes.map((note, index) => (
            <AnnotationCard
              key={note.courseid_seasonid_movieid_userid_noteid}
              time={note.noteid}
              index={index}
              description={note.message}
              onDelete={handleDeleteNote}
            />
          ))}
        </AnnotationsContainer>
      </Content>
    </Container>
  );
};

export default Course;
