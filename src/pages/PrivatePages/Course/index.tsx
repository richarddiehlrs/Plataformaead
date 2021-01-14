import React, {
  useEffect, useCallback, useState, useRef, useMemo,
} from 'react';
import { useParams } from 'react-router-dom';
import { useAuth } from 'hooks/auth';

import api from 'services/api';
import { convertSecondsToHoursMinutesSeconds } from 'utils/functions';
import { CourseSeason, CourseSeasonMovie, Course as CourseModel } from 'models/CourseModels';
import { Notes } from 'models/AuthModels';

import AnnotationCard from 'components/Atoms/AnnotationCard';
import Loading from 'components/Atoms/Loading';
import VimeoComponent from 'components/Atoms/VimeoComponent/CourseVimeoComponent';
import Modal from 'components/Mols/Modal';
import CourseSideMenu from 'components/Mols/SideMenus/CourseSideMenu';

import closeIconGray from 'assets/icons/closeIcongray.png';

import {
  Container,
  Content,
  VideoContainer,
  AnnotationsContainer,
  AddNoteWrapper,
  StyledButton,
  NotesWrapper,
  CloseModalButton,
  SaveNoteButton,
} from './styles';

interface Params {
  courseid: string;
}

const Course: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [showAddNote, setShowAddNote] = useState(false);
  const [isAddingNote, setIsAddingNote] = useState(false);
  const [isNoteLoading, setIsNoteLoading] = useState(false);
  const [selectedVideoPosition, setSelectedVideoPosition] = useState(0);

  const [actualTime, setActualTime] = useState({
    playedSeconds: 0,
    played: 0,
    loadedSeconds: 0,
    loaded: 0,
  });

  const [courseDetails, setCourseDetails] = useState<CourseModel>();
  const [courseSeasons, setCourseSeasons] = useState<CourseSeason[]>([]);
  const [courseSeasonMovies, setCourseSeasonMovies] = useState<CourseSeasonMovie[]>([]);

  const [notes, setNotes] = useState<Notes[]>([]);

  const { user } = useAuth();
  const params = useParams();
  const { courseid } = params as Params;

  const addNoteInputRef = useRef<HTMLInputElement>(null);

  useMemo(() => {
    if (courseSeasonMovies[selectedVideoPosition]
      && courseSeasonMovies[selectedVideoPosition].notes) {
      setNotes(courseSeasonMovies[selectedVideoPosition].notes);
      return courseSeasonMovies[selectedVideoPosition].notes;
    }
    return [];
  }, [selectedVideoPosition, courseSeasonMovies]);

  const stablishCourseSeasonMovieNotes = useCallback(() => {
    if (courseSeasonMovies[selectedVideoPosition]
      && courseSeasonMovies[selectedVideoPosition].notes) {
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
      movieid: courseSeasonMovies[selectedVideoPosition].movieid,
      courseid: courseSeasonMovies[selectedVideoPosition].courseid,
      seasonid: courseSeasonMovies[selectedVideoPosition].seasonid,
      userid: user.userid,
      noteid: noteId,
    });
    const updatedNotes = notes.splice(index);
    updatedNotes.splice(index, 1);
    setNotes(updatedNotes);
  }, [user, courseSeasonMovies, selectedVideoPosition, notes]);

  const handleEditNote = useCallback(async (text: string, index: number) => {
    setIsNoteLoading(true);
    const updatedNotes = notes;

    updatedNotes[index].message = text;

    const response = await api.post('/course/season/movie/user/note', {
      message: text,
      movieid: updatedNotes[index].movieid,
      courseid: updatedNotes[index].courseid,
      seasonid: updatedNotes[index].seasonid,
      userid: updatedNotes[index].userid,
      noteid: updatedNotes[index].noteid,
    });
    console.log(response.data);
    setIsNoteLoading(false);
    setNotes([...updatedNotes]);
  }, [notes]);

  const handleAddnote = useCallback(async (action: string) => {
    if (action === 'openModal') {
      setIsPlaying(false);
      setShowAddNote(true);
    }
    if (action === 'submitNote' && addNoteInputRef.current && addNoteInputRef.current.value !== null) {
      const updatedNotes = notes;
      const newNote = {
        courseid_seasonid_movieid_userid_noteid: `${courseSeasonMovies[selectedVideoPosition].courseid}+${courseSeasonMovies[selectedVideoPosition].seasonid}_${courseSeasonMovies[selectedVideoPosition].movieid}_${user.userid}_${convertSecondsToHoursMinutesSeconds(actualTime.playedSeconds)}`,
        message: addNoteInputRef.current.value,
        movieid: courseSeasonMovies[selectedVideoPosition].movieid,
        courseid: courseSeasonMovies[selectedVideoPosition].courseid,
        seasonid: courseSeasonMovies[selectedVideoPosition].seasonid,
        userid: user.userid,
        noteid: convertSecondsToHoursMinutesSeconds(actualTime.playedSeconds),
      };
      try {
        setIsAddingNote(true);
        const response = await api.post('/course/season/movie/user/note', newNote);
        updatedNotes.push(newNote);
        console.log(response.data);
        setIsAddingNote(false);
        setNotes(updatedNotes);
        setShowAddNote(false);
      } catch (err) {
        setIsAddingNote(false);
        setShowAddNote(false);
        console.log(err.message);
      }
    }
  }, [
    actualTime.playedSeconds,
    user.userid,
    selectedVideoPosition,
    courseSeasonMovies,
    notes,
  ]);

  useEffect(() => {
    getCourseSeasons();
    getCourseDetails();
    stablishCourseSeasonMovieNotes();
  }, [getCourseSeasons, getCourseDetails, stablishCourseSeasonMovieNotes]);

  return (
    <Container>
      {showAddNote && (
        <Modal
          onClose={() => setShowAddNote(false)}
        >
          <div className="add-note-container">
            <div className="add-note-header">
              <p>{`${convertSecondsToHoursMinutesSeconds(actualTime.playedSeconds)}`}</p>
              <CloseModalButton onClick={() => { setShowAddNote(false); setIsPlaying(true); }}>
                <img className="edit" src={closeIconGray} alt="closeIcon" />
              </CloseModalButton>
            </div>
            <div className="add-note-body">
              <input type="text" ref={addNoteInputRef} />
              <SaveNoteButton
                customStyle="white"
                onClick={() => handleAddnote('submitNote')}
              >
                {isAddingNote ? <Loading size={2} type="ellipsis" /> : 'SALVAR COMENTÁRIO'}
              </SaveNoteButton>
            </div>
          </div>
        </Modal>
      )}
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
          {courseSeasonMovies.length > 0 && (
            <VimeoComponent
              large={notes.length < 1}
              url={courseSeasonMovies[selectedVideoPosition]
              && courseSeasonMovies[selectedVideoPosition].url}
              video={courseSeasonMovies[selectedVideoPosition]}
              isLoading={isLoading}
              isPlaying={isPlaying}
              actualTime={actualTime}
              setActualTime={!showAddNote && setActualTime}
              onPause={handlePauseVideo}
              onFinish={handleFinishVideo}
            />
          )}
        </VideoContainer>
        <AnnotationsContainer
          hasNotes={notes.length > 0}
        >
          {!isLoading && courseSeasonMovies.length > 0 && (
            <AddNoteWrapper>
              <StyledButton onClick={() => handleAddnote('openModal')}>Adicionar anotação</StyledButton>
            </AddNoteWrapper>
          )}
          <NotesWrapper className="hasVerticalScroll">
            {notes.length > 0 && notes.map((note, index) => (
              <AnnotationCard
                key={note.courseid_seasonid_movieid_userid_noteid}
                time={note.noteid}
                index={index}
                description={note.message}
                onDelete={handleDeleteNote}
                onEdit={handleEditNote}
                isNoteLoading={isNoteLoading}
              />
            ))}
          </NotesWrapper>
        </AnnotationsContainer>
      </Content>
    </Container>
  );
};

export default Course;
