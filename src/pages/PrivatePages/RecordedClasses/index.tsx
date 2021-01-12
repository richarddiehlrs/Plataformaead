import React, {
  useEffect, useState, useCallback, useRef, useMemo,
} from 'react';
import { CancelTokenSource } from 'axios';

import { convertSecondsToHoursMinutesSeconds } from 'utils/functions';
import api from 'services/api';
import { useAuth } from 'hooks/auth';
import {
  SchoolLevel, SchoolLevelSubject, SchoolLevelSubjectSeasonClasses, ClassesNotes,
} from 'models/SchoolModels';

import VimeoComponent from 'components/Atoms/VimeoComponent/ClassVimeoComponent';
import AnnotationCard from 'components/Atoms/AnnotationCard';
import Loading from 'components/Atoms/Loading';
import Modal from 'components/Mols/Modal';
import RecordedClassesSideMenu from 'components/Mols/SideMenus/RecordedClassesSideMenu';

import closeIconGray from 'assets/icons/closeIcongray.png';

import {
  Container,
  Content,
  VideoContainer,
  AnnotationsContainer,
  AddNoteWrapper,
  StyledButton,
  NotesWrapper,
  SaveNoteButton,
  CloseModalButton,
} from './styles';

const RecordedClasses: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isNoteLoading, setIsNoteLoading] = useState(false);
  const [isAddingNote, setIsAddingNote] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [showAddNote, setShowAddNote] = useState(false);

  const [actualTime, setActualTime] = useState({
    playedSeconds: 0,
    played: 0,
    loadedSeconds: 0,
    loaded: 0,
  });

  const [schoolLevels, setSchoolLevels] = useState<SchoolLevel[]>([]);
  const [schoolLevelSubjects, setSchoolLevelSubjects] = useState<SchoolLevelSubject[]>([]);
  const [schoolLevelSubjectSeasons, setSchoolLevelSubjectSeasons] = useState<SchoolLevelSubject[]>([]);
  const [videos, setVideos] = useState<SchoolLevelSubjectSeasonClasses[]>([]);

  const [notes, setNotes] = useState<ClassesNotes[]>([]);

  const [selectedSchoolLevel, setSelectedSchoolLevel] = useState({ key: '', value: '' });
  const [selectedSchoolSubject, setSelectedSchoolSubject] = useState({ key: '', value: '' });

  const [selectedVideoPosition, setSelectedVideoPosition] = useState(0);
  const [previousVideoPosition, setPreviousVideoPosition] = useState<number>();

  const { user } = useAuth();

  const cancelLevelIdReq = useRef<CancelTokenSource>({} as CancelTokenSource);
  const cancelSubjectsReq = useRef<CancelTokenSource>({} as CancelTokenSource);
  const cancelSubejectSeasonReq = useRef<CancelTokenSource>({} as CancelTokenSource);
  const cancelSubjectSeasonInfoReq = useRef<CancelTokenSource>({} as CancelTokenSource);
  const addNoteInputRef = useRef<HTMLInputElement>(null);

  useMemo(() => {
    if (videos[selectedVideoPosition] && videos[selectedVideoPosition].notes) {
      setNotes(videos[selectedVideoPosition].notes);
      return videos[selectedVideoPosition].notes;
    }
    return [];
  }, [selectedVideoPosition, videos]);

  const handlePauseVideo = useCallback(async (info) => {
    if (mounted) {
      const videoPosition = previousVideoPosition
      !== undefined ? previousVideoPosition : selectedVideoPosition;
      await api.post('/school/level/subject/season/class/user', {
        classid: videos[videoPosition].classid,
        seasonid: videos[selectedVideoPosition].seasonid,
        levelid: videos[selectedVideoPosition].levelid,
        subjectid: videos[selectedVideoPosition].subjectid,
        schoolid: videos[selectedVideoPosition].schoolid,
        userid: user.userid,
        videowatched: convertSecondsToHoursMinutesSeconds(actualTime.playedSeconds),
        videostatus: 'watching',
        exercisestatus: ' ',
      });
      setPreviousVideoPosition(undefined);
    }
  }, [videos, selectedVideoPosition, user.userid, mounted, previousVideoPosition, actualTime.playedSeconds]);

  const handleChangeVideo = useCallback(async (videoPosition) => {
    setPreviousVideoPosition(selectedVideoPosition);
    setSelectedVideoPosition(videoPosition);
  }, [setSelectedVideoPosition, selectedVideoPosition]);

  const handleFinishVideo = useCallback((info) => {
    handlePauseVideo(info);
  }, [handlePauseVideo]);

  const handleDeleteNote = useCallback(async (noteId: string, index: number) => {
    setIsNoteLoading(true);

    const updatedNotes = notes;
    console.log(updatedNotes);

    await api.post('/school/level/subject/season/class/user/note/delete', {
      classid: videos[selectedVideoPosition].classid,
      seasonid: videos[selectedVideoPosition].seasonid,
      levelid: videos[selectedVideoPosition].levelid,
      subjectid: videos[selectedVideoPosition].subjectid,
      schoolid: user.schoolid,
      noteid: noteId,
      userid: user.userid,
    });
    updatedNotes.splice(index, 1);
    console.log(updatedNotes);
    setNotes(updatedNotes);
    setIsNoteLoading(false);
  }, [user, videos, selectedVideoPosition, notes]);

  const handleEditNote = useCallback(async (text: string, index: number) => {
    setIsNoteLoading(true);
    const updatedNotes = notes;

    updatedNotes[index].message = text;

    const response = await api.post('/school/level/subject/season/class/user/note', {
      classid: updatedNotes[index].classid,
      seasonid: updatedNotes[index].seasonid,
      levelid: updatedNotes[index].levelid,
      subjectid: updatedNotes[index].subjectid,
      schoolid: updatedNotes[index].schoolid,
      message: text,
      noteid: updatedNotes[index].noteid,
      userid: updatedNotes[index].userid,
    });
    console.log(response.data);
    setIsNoteLoading(false);
    setNotes([...updatedNotes]);
  }, [notes]);

  const handleAddnote = useCallback(async (action: string) => {
    if (action === 'openModal') {
      setIsPlaying(false);
      setShowAddNote(!showAddNote);
    }
    if (action === 'submitNote' && addNoteInputRef.current && addNoteInputRef.current.value !== null) {
      const updatedNotes = notes;
      const newNote = {
        classid: videos[selectedVideoPosition].classid,
        seasonid: videos[selectedVideoPosition].seasonid,
        levelid: videos[selectedVideoPosition].levelid,
        subjectid: videos[selectedVideoPosition].subjectid,
        schoolid: videos[selectedVideoPosition].schoolid,
        message: addNoteInputRef.current.value,
        noteid: convertSecondsToHoursMinutesSeconds(actualTime.playedSeconds),
        userid: user.userid,
        schoolid_levelid_subjectid_seasonid_classid_userid_noteid: `${videos[selectedVideoPosition].schoolid}_${videos[selectedVideoPosition].levelid}_${videos[selectedVideoPosition].subjectid}_${videos[selectedVideoPosition].seasonid}_${videos[selectedVideoPosition].classid}_${user.userid}_${convertSecondsToHoursMinutesSeconds(actualTime.playedSeconds)}`,
      };
      try {
        setIsAddingNote(true);
        const response = await api.post('/school/level/subject/season/class/user/note', newNote);
        updatedNotes.push(newNote);
        console.log(response.data);
        setIsAddingNote(false);
        setNotes(updatedNotes);
        setShowAddNote(false);
      } catch (err) {
        console.log(err.message);
      }
    }
  }, [showAddNote, actualTime, notes, user, selectedVideoPosition, videos]);

  const getSchoolLevelSubjectSeasonInfo = useCallback(async (item) => {
    setVideos([]);
    setSelectedVideoPosition(0);
    try {
      const response = await api.get<SchoolLevelSubjectSeasonClasses[]>(`/school/level/subject/season/class?schoolid=${user.schoolid}&levelid=${selectedSchoolLevel.key}&subjectid=${selectedSchoolSubject.key}&seasonid=${item.key}&userid=${user.userid}`, {
        cancelToken: cancelSubjectSeasonInfoReq.current.token,
      });
      setVideos(response.data);
    } catch (err) {
      console.log(err.message);
    }
  }, [selectedSchoolLevel, user, selectedSchoolSubject, cancelSubjectSeasonInfoReq]);

  const getSchoolLevelSubjectSeason = useCallback(async (item) => {
    setVideos([]);
    setSchoolLevelSubjectSeasons([]);

    try {
      const response = await api.get<SchoolLevelSubject[]>(`/school/level/subject/season?schoolid=${user.schoolid}&levelid=${selectedSchoolLevel.key}&subjectid=${item.key}`, {
        cancelToken: cancelSubejectSeasonReq.current.token,
      });
      setSelectedSchoolSubject(item);
      setSchoolLevelSubjectSeasons(response.data);
    } catch (err) {
      console.log(err.message);
    }
  }, [selectedSchoolLevel, user.schoolid, cancelSubejectSeasonReq]);

  const getSchoolSubjects = useCallback(async (item) => {
    setIsLoading(true);
    setVideos([]);
    setSchoolLevelSubjects([]);
    setSchoolLevelSubjectSeasons([]);

    try {
      const response = await api.get<SchoolLevelSubject[]>(`/school/level/subject?schoolid=${user.schoolid}&levelid=${item.key}`, {
        cancelToken: cancelSubjectsReq.current.token,
      });
      setSelectedSchoolLevel(item);
      setSchoolLevelSubjects(response.data);
    } catch (err) {
      console.log(err.message);
    }
    setIsLoading(false);
  }, [user.schoolid, cancelSubjectsReq]);

  const getSchoolLevels = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await api.get<SchoolLevel[]>(`/school/level?schoolid=${user.schoolid}`, {
        cancelToken: cancelLevelIdReq.current.token,
      });
      setSchoolLevels(response.data);
      const mySchoolItem = response.data.find((item) => item.levelid === user.levelid);
      getSchoolSubjects({ key: mySchoolItem?.levelid, value: mySchoolItem?.title });
    } catch (err) {
      console.log(err.message);
    }
    setIsLoading(false);
  }, [user, getSchoolSubjects, cancelLevelIdReq]);

  useEffect(() => {
    setIsLoading(true);
    setMounted(true);

    getSchoolLevels();
    setIsLoading(false);

    return () => setMounted(false);
  }, [user.schoolid, getSchoolLevels]);

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
      <RecordedClassesSideMenu
        levelIdOptions={schoolLevels}
        subjectOptions={schoolLevelSubjects
          && schoolLevelSubjects.map((schoolLevelSubject) => (
            { key: schoolLevelSubject.title, value: schoolLevelSubject.subjectid }
          ))}
        subjectSeasonOptions={schoolLevelSubjectSeasons
          && schoolLevelSubjectSeasons.map((schoolLevelSubjectSeason) => (
            { key: schoolLevelSubjectSeason.seasonid, value: schoolLevelSubjectSeason.title }
          ))}
        selectedPosition={selectedVideoPosition}
        selectedSchoolLevel={selectedSchoolLevel.key}
        isLoading={isLoading}
        hasLevelIdSelected={selectedSchoolLevel.key !== ''}
        hasSubjectSelected={schoolLevelSubjectSeasons.length > 0}
        firstItem={schoolLevelSubjects[0]
          && { key: schoolLevelSubjects[0].title, value: schoolLevelSubjects[0].subjectid }}
        videos={videos && videos}
        onLevelIdChange={(item) => {
          setIsPlaying(!isPlaying); setTimeout(() => {
            getSchoolSubjects(item);
          }, 200);
        }}
        onSubjectChange={(item) => {
          setIsPlaying(!isPlaying); setTimeout(() => {
            getSchoolLevelSubjectSeason(item);
          }, 200);
        }}
        onSubjectSeasonChange={(item) => {
          setIsPlaying(!isPlaying); setTimeout(() => {
            getSchoolLevelSubjectSeasonInfo(item);
          }, 200);
        }}
        onVideoChange={(e) => {
          setIsPlaying(!isPlaying); setTimeout(() => {
            handleChangeVideo(e);
          }, 200);
        }}
      />
      <Content>
        <VideoContainer>
          {videos.length > 0 && (
            <VimeoComponent
              large={notes.length < 1}
              url={videos[selectedVideoPosition]
            && videos[selectedVideoPosition].url}
              video={videos[selectedVideoPosition]}
              isLoading={isLoading}
              isPlaying={isPlaying}
              actualTime={actualTime}
              setActualTime={setActualTime}
              onPause={handlePauseVideo}
              onFinish={handleFinishVideo}
            />
          )}
        </VideoContainer>
        <AnnotationsContainer
          hasNotes={notes.length > 0}
        >
          {!isLoading && videos.length > 0 && (
            <AddNoteWrapper>
              <StyledButton onClick={() => handleAddnote('openModal')}>Adicionar anotação</StyledButton>
            </AddNoteWrapper>
          )}
          <NotesWrapper className="hasVerticalScroll">
            {notes.length > 0 && notes.map((note, index) => (
              <AnnotationCard
                key={note.schoolid_levelid_subjectid_seasonid_classid_userid_noteid}
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

export default RecordedClasses;
