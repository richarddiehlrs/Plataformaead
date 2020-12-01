import React, { useEffect, useState, useCallback } from 'react';

import api from 'services/api';
import { useAuth } from 'hooks/auth';
import CourseSeason from 'models/CourseSeason';
import CourseSeasonMovie from 'models/CourseSeasonMovie';

import VimeoComponent from 'components/Atoms/VimeoComponent';
import AnnotationCard from 'components/Atoms/AnnotationCard';
import CourseSideMenu from 'components/Mols/CourseSideMenu';

import {
  Container, Content, VideoContainer, AnnotationsContainer,
} from './styles';

const RecordedClasses: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [selectedSeason, setSelectedSeason] = useState({ key: '', value: '' });

  const [firstSeason, setFirstSeason] = useState<CourseSeason>();
  const [courseSeasons, setCourseSeasons] = useState<CourseSeason[]>([]);
  const [courseSeasonMovies, setCourseSeasonMovies] = useState<CourseSeasonMovie[]>([]);

  const { user } = useAuth();

  const getSeasonInfo = useCallback((item) => {
    setSelectedSeason(item);

    if (item.key !== '') {
      // console.log(item.value);
      setIsLoading(true);
      api.get<CourseSeasonMovie[]>(`/course/season/movie?courseid=Programação&seasonid=${item.key}&userid=${user.userid}`).then((response) => {
        console.log(response.data);
        setCourseSeasonMovies(response.data);
        setIsLoading(false);
      });
    }
  }, [user.userid]);

  useEffect(() => {
    setIsLoading(true);
    api.get<CourseSeason[]>('/course/season?courseid=Programação').then((response) => {
      setCourseSeasons(response.data);
      setFirstSeason(response.data.find((courseSeason) => courseSeason.position === 0));
      setIsLoading(false);
    });
  }, []);

  return (
    <Container>
      <CourseSideMenu
        customType="recordedClasses"
        verticalDropDownOptions={courseSeasons && courseSeasons.map((courseSeason) => (
          { key: courseSeason.title, value: courseSeason.courseid_seasonid }
        ))}
        firstItem={firstSeason && { key: firstSeason.title, value: firstSeason.seasonid }}
        onDropDownChange={(item) => getSeasonInfo(item)}
        isLoading={isLoading}
        videos={courseSeasonMovies}
      />
      <Content>
        <VideoContainer>
          <VimeoComponent url={courseSeasonMovies[0] && courseSeasonMovies[0].url} />
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
