import React, { useEffect, useState, useCallback } from 'react';

import api from 'services/api';
import { useAuth } from 'hooks/auth';
// import CourseSeason from 'models/CourseSeason';
// import CourseSeasonMovie from 'models/CourseSeasonMovie';
import { SchoolLevel, SchoolLevelSubject, SchoolLevelSubjectSeasonClasses } from 'models/SchoolModels';

import VimeoComponent from 'components/Atoms/VimeoComponent';
import AnnotationCard from 'components/Atoms/AnnotationCard';
import CourseSideMenu from 'components/Mols/CourseSideMenu';

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
  const [selectedCourseSeasonMoviePosition, setSelectedCourseSeasonMoviePosition] = useState(0);

  const { user } = useAuth();

  const getSchoolLevelSubjectSeasonInfo = useCallback(async (item) => {
    setVideos([]);
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
    } catch (err) {
      console.log(err.message);
    }
    setIsLoading(false);
  }, [user.schoolid]);

  useEffect(() => {
    setIsLoading(true);
    getSchoolLevels();
    setIsLoading(false);
  }, [user.schoolid, getSchoolLevels]);

  return (
    <Container>
      <CourseSideMenu
        customType="recordedClasses"
        levelIdOptions={schoolLevels}
        subjectOptions={schoolLevelSubjects
          && schoolLevelSubjects.map((schoolLevelSubject) => (
            { key: schoolLevelSubject.title, value: schoolLevelSubject.subjectid }
          ))}
        subjectSeasonOptions={schoolLevelSubjectSeasons
            && schoolLevelSubjectSeasons.map((schoolLevelSubjectSeason) => (
              { key: schoolLevelSubjectSeason.seasonid, value: schoolLevelSubjectSeason.title }
            ))}
        selectedPosition={selectedCourseSeasonMoviePosition}
        selectedSchoolLevel={selectedSchoolLevel.key}
        isLoading={isLoading}
        hasLevelIdSelected={selectedSchoolLevel.key !== ''}
        hasSubjectSelected={schoolLevelSubjectSeasons.length > 0}
        firstItem={schoolLevelSubjects[0] && { key: schoolLevelSubjects[0].title, value: schoolLevelSubjects[0].subjectid }}
        videos={videos && videos}
        onLevelIdChange={(item) => getSchoolSubjects(item)}
        onSubjectChange={(item) => getSchoolLevelSubjectSeason(item)}
        onSubjectSeasonChange={(item) => getSchoolLevelSubjectSeasonInfo(item)}
        onVideoChange={setSelectedCourseSeasonMoviePosition}
      />
      <Content>
        <VideoContainer>
          <VimeoComponent url={videos[selectedCourseSeasonMoviePosition] && videos[selectedCourseSeasonMoviePosition].url} />
        </VideoContainer>
        <AnnotationsContainer className="hasVerticalScroll">
          <AnnotationCard time="00:16" description="No início, olhar o pronome do exemplo" />
          <AnnotationCard time="00:16" description="No início, olhar o pronome do exemplo" />
          <AnnotationCard time="00:16" description="No início, olhar o pronome do exemplo" />
          <AnnotationCard time="00:16" description="No início, olhar o pronome do exemplo" />
          <AnnotationCard time="00:16" description="No início, olhar o pronome do exemplo" />
          <AnnotationCard time="00:16" description="No início, olhar o pronome do exemplo" />
          <AnnotationCard time="00:16" description="No início, olhar o pronome do exemplo" />
          <AnnotationCard time="00:16" description="No início, olhar o pronome do exemplo" />
          <AnnotationCard time="00:16" description="No início, olhar o pronome do exemplo" />
        </AnnotationsContainer>
      </Content>
    </Container>
  );
};

export default RecordedClasses;
