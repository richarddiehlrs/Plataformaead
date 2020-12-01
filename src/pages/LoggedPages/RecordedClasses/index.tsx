import React, { useEffect, useState, useCallback } from 'react';

import api from 'services/api';
import { useAuth } from 'hooks/auth';
import CourseSeason from 'models/CourseSeason';

import VimeoComponent from 'components/Atoms/VimeoComponent';
import AnnotationCard from 'components/Atoms/AnnotationCard';
import CourseSideMenu from 'components/Mols/CourseSideMenu';

import {
  Container, Content, VideoContainer, AnnotationsContainer,
} from './styles';

const RecordedClasses: React.FC = () => {
  const [courseSeasons, setCourseSeasons] = useState<CourseSeason[]>([]);
  const [firstSeason, setFirstSeason] = useState<CourseSeason>();
  const [selectedSeason, setSelectedSeason] = useState({ key: '', value: '' });

  const { user } = useAuth();

  const getSeasonInfo = useCallback((item) => {
    // console.log(item.value);
    setSelectedSeason(item);

    if (item.key !== '') {
      api.get(`/course/season/movie?courseid=Programação&seasonid=${item.key}&userid=${user.userid}`).then((response) => {
        console.log(response.data);
      });
    }
  }, [user.userid]);

  useEffect(() => {
    api.get<CourseSeason[]>('/course/season?courseid=Programação').then((response) => {
      setCourseSeasons(response.data);
      setFirstSeason(response.data.find((courseSeason) => courseSeason.position === 0));
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
      />
      <Content>
        <VideoContainer>
          <VimeoComponent />
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
