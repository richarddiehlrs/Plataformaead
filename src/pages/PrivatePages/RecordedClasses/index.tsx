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
import RecordedClassesSideMenu from 'components/Mols/SideMenus/RecordedClassesSideMenu';

import {
  Container, Content, VideoContainer, AnnotationsContainer,
} from './styles';

const RecordedClasses: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [mounted, setMounted] = useState(false);

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

  useMemo(() => {
    if (videos[selectedVideoPosition] && videos[selectedVideoPosition].notes) {
      setNotes(videos[selectedVideoPosition].notes);
      return videos[selectedVideoPosition].notes;
    }
    return [];
  }, [selectedVideoPosition, videos]);

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
    // console.log(cancelSubjectSeasonInfoReq.current);
    // console.log(cancelSubejectSeasonReq.current);

    if (cancelSubejectSeasonReq.current !== null && cancelSubjectSeasonInfoReq.current !== null) {
      // cancelSubejectSeasonReq.current.cancel();
      // cancelSubjectSeasonInfoReq.current.cancel();
    }
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
  }, [user.schoolid, cancelSubjectsReq, cancelSubjectSeasonInfoReq, cancelSubejectSeasonReq]);

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
        videowatched: convertSecondsToHoursMinutesSeconds(info.seconds),
        videostatus: 'watching',
        exercisestatus: ' ',
      });
      setPreviousVideoPosition(undefined);
    }
  }, [videos, selectedVideoPosition, user.userid, mounted, previousVideoPosition]);

  const handleChangeVideo = useCallback(async (videoPosition) => {
    setPreviousVideoPosition(selectedVideoPosition);
    setSelectedVideoPosition(videoPosition);
  }, [setSelectedVideoPosition, selectedVideoPosition]);

  const handleFinishVideo = useCallback((info) => {
    handlePauseVideo(info);
  }, [handlePauseVideo]);

  const handleDeleteNote = useCallback(async (noteId: string, index: number) => {
    await api.post('/school/level/subject/season/class/user/note/delete', {
      classid: videos[selectedVideoPosition].classid,
      seasonid: videos[selectedVideoPosition].seasonid,
      levelid: videos[selectedVideoPosition].levelid,
      subjectid: videos[selectedVideoPosition].subjectid,
      schoolid: user.schoolid,
      noteid: noteId,
      userid: user.userid,
    });
    const updatedNotes = notes.splice(index);
    updatedNotes.splice(index, 1);
    setNotes(updatedNotes);
  }, [user, videos, selectedVideoPosition, notes]);

  useEffect(() => {
    setIsLoading(true);
    setMounted(true);

    getSchoolLevels();
    setIsLoading(false);

    return () => setMounted(false);
  }, [user.schoolid, getSchoolLevels]);

  return (
    <Container>
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
        onLevelIdChange={(item) => getSchoolSubjects(item)}
        onSubjectChange={(item) => getSchoolLevelSubjectSeason(item)}
        onSubjectSeasonChange={(item) => getSchoolLevelSubjectSeasonInfo(item)}
        onVideoChange={handleChangeVideo}
      />
      <Content>
        <VideoContainer>
          <VimeoComponent
            large={notes.length < 1}
            url={videos[selectedVideoPosition]
            && videos[selectedVideoPosition].url}
            video={videos[selectedVideoPosition]}
            onPause={handlePauseVideo}
            onFinish={handleFinishVideo}
          />
        </VideoContainer>
        <AnnotationsContainer
          className="hasVerticalScroll"
          hasNotes={notes.length > 0}
        >
          {notes.length > 0 && notes.map((note, index) => (
            <AnnotationCard
              key={note.schoolid_levelid_subjectid_seasonid_classid_userid_noteid}
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

export default RecordedClasses;
