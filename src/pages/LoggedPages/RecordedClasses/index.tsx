import React, { useEffect, useState, useCallback } from 'react';

import api from 'services/api';
import { convertSecondsToHoursMinutesSeconds } from 'utils/functions';
import { useAuth } from 'hooks/auth';
import { SchoolLevel, SchoolLevelSubject, SchoolLevelSubjectSeasonClasses } from 'models/SchoolModels';

import VimeoComponent from 'components/Atoms/VimeoComponent/ClassVimeoComponent';
import AnnotationCard from 'components/Atoms/AnnotationCard';
import RecordedClassesSideMenu from 'components/Mols/RecordedClassesSideMenu';

import {
  Container, Content, VideoContainer, AnnotationsContainer,
} from './styles';

const RecordedClasses: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);

  const [schoolLevels, setSchoolLevels] = useState<SchoolLevel[]>([]);
  const [selectedSchoolLevel, setSelectedSchoolLevel] = useState({ key: '', value: '' });
  const [selectedSchoolSubject, setSelectedSchoolSubject] = useState({ key: '', value: '' });

  const [schoolLevelSubjects, setSchoolLevelSubjects] = useState<SchoolLevelSubject[]>([]);
  const [schoolLevelSubjectSeasons, setSchoolLevelSubjectSeasons] = useState<SchoolLevelSubject[]>([]);

  const [videos, setVideos] = useState<SchoolLevelSubjectSeasonClasses[]>([]);
  const [selectedVideoPosition, setSelectedVideoPosition] = useState(0);

  const { user } = useAuth();

  const getSchoolLevelSubjectSeasonInfo = useCallback(async (item) => {
    setVideos([]);
    setSelectedVideoPosition(0);
    try {
      const response = await api.get<SchoolLevelSubjectSeasonClasses[]>(`/school/level/subject/season/class?schoolid=${user.schoolid}&levelid=${selectedSchoolLevel.key}&subjectid=${selectedSchoolSubject.key}&seasonid=${item.key}&userid=${user.userid}`);
      setVideos(response.data);
    } catch (err) {
      console.log(err.message);
    }
  }, [selectedSchoolLevel, user, selectedSchoolSubject.key]);

  const getSchoolLevelSubjectSeason = useCallback(async (item) => {
    setVideos([]);
    setSchoolLevelSubjectSeasons([]);

    try {
      const response = await api.get<SchoolLevelSubject[]>(`/school/level/subject/season?schoolid=${user.schoolid}&levelid=${selectedSchoolLevel.key}&subjectid=${item.key}`);
      setSelectedSchoolSubject(item);
      setSchoolLevelSubjectSeasons(response.data);
    } catch (err) {
      console.log(err.message);
    }
  }, [selectedSchoolLevel, user.schoolid]);

  const getSchoolSubjects = useCallback(async (item) => {
    setIsLoading(true);
    setVideos([]);
    setSchoolLevelSubjects([]);
    setSchoolLevelSubjectSeasons([]);

    try {
      const response = await api.get<SchoolLevelSubject[]>(`/school/level/subject?schoolid=${user.schoolid}&levelid=${item.key}`);
      setSelectedSchoolLevel(item);
      setSchoolLevelSubjects(response.data);
    } catch (err) {
      console.log(err.message);
    }
    setIsLoading(false);
  }, [user.schoolid]);

  const getSchoolLevels = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await api.get<SchoolLevel[]>(`/school/level?schoolid=${user.schoolid}`);
      setSchoolLevels(response.data);
      const mySchoolItem = response.data.find((item) => item.levelid === user.levelid);
      getSchoolSubjects({ key: mySchoolItem?.levelid, value: mySchoolItem?.title });
    } catch (err) {
      console.log(err.message);
    }
    setIsLoading(false);
  }, [user, getSchoolSubjects]);

  const handlePauseVideo = useCallback(async (info) => {
    const response = await api.post('https://hdinsfdwwa.execute-api.sa-east-1.amazonaws.com/prod/school/level/subject/season/class/user', {
      classid: videos[selectedVideoPosition].classid,
      seasonid: videos[selectedVideoPosition].seasonid,
      levelid: videos[selectedVideoPosition].levelid,
      subjectid: videos[selectedVideoPosition].subjectid,
      schoolid: videos[selectedVideoPosition].schoolid,
      userid: user.userid,
      videowatched: convertSecondsToHoursMinutesSeconds(info.seconds),
      videostatus: 'watching',
      exercisestatus: ' ',
    });

    console.log(response.data);
  }, [videos, selectedVideoPosition, user.userid]);

  const handleFinishVideo = useCallback((info) => {
    handlePauseVideo(info);
  }, [handlePauseVideo]);

  useEffect(() => {
    setIsLoading(true);
    getSchoolLevels();
    setIsLoading(false);
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
        onVideoChange={setSelectedVideoPosition}
      />
      <Content>
        <VideoContainer>
          <VimeoComponent
            large={videos[selectedVideoPosition]
            && videos[selectedVideoPosition].notes.length < 1}
            url={videos[selectedVideoPosition]
            && videos[selectedVideoPosition].url}
            video={videos[selectedVideoPosition]}
            onPause={handlePauseVideo}
            onFinish={handleFinishVideo}
          />
        </VideoContainer>
        <AnnotationsContainer
          className="hasVerticalScroll"
          hasNotes={videos[selectedVideoPosition]
            && videos[selectedVideoPosition].notes.length > 0}
        >
          {videos[selectedVideoPosition]
          && videos[selectedVideoPosition].notes.length > 0
          && videos[selectedVideoPosition].notes.map((note) => (
            <AnnotationCard
              key={note.schoolid_levelid_subjectid_seasonid_classid_userid_noteid}
              time={note.noteid}
              description={note.message}
            />
          ))}
        </AnnotationsContainer>
      </Content>
    </Container>
  );
};

export default RecordedClasses;
