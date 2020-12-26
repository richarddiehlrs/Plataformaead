import React, {
  useEffect, useState, useMemo, useCallback,
} from 'react';

import api from 'services/api';
import { useAuth } from 'hooks/auth';
import { SchoolLiveSubjects, SchoolLiveClasses } from 'models/SchoolModels';

import VimeoComponent from 'components/Atoms/VimeoComponent/LiveClassVimeoComponent';
import LiveClassesSideMenu from 'components/Mols/SideMenus/LiveClassesSideMenu';

import { Container, VideoContainer } from './styles';

const AoVivo: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [selectedSubjectPosition, setSelectedSubjectPosition] = useState(0);
  const [selectedVideo, setSelectedVideo] = useState<SchoolLiveClasses>({} as SchoolLiveClasses);

  const [schoolLiveClassesSubject, setSchoolLiveClassesSubject] = useState<SchoolLiveSubjects[]>([]);
  const [recordedLiveClasses, setRecordedLiveClasses] = useState<SchoolLiveClasses[]>([]);
  const [liveClasses, setLiveClasses] = useState<SchoolLiveClasses[]>([]);

  const { user } = useAuth();

  const getLiveClasses = useCallback(async () => {
    setIsLoading(true);
    const response = await api.get<SchoolLiveClasses[]>(`/school/live/level/subject/class?schoolid=${user.schoolid}&levelid=${user.levelid}&subjectid=AoVivo`);
    setLiveClasses(response.data);
    setIsLoading(false);
  }, [user]);

  const getRecordedLiveClasses = useCallback(async (subjectid: string) => {
    setIsLoading(true);
    const response = await api.get<SchoolLiveClasses[]>(`/school/live/level/subject/class?schoolid=${user.schoolid}&levelid=${user.levelid}&subjectid=${subjectid}`);
    setSelectedVideo(response.data[0]);
    setRecordedLiveClasses(response.data);
    setIsLoading(false);
  }, [user]);

  const handleChangeLiveClass = useCallback((item: any) => {
    getRecordedLiveClasses(item.value);
    setSelectedSubjectPosition(Number(item.key));
  }, [getRecordedLiveClasses]);

  const getLiveClassesSubject = useCallback(async () => {
    setIsLoading(true);
    const response = await api.get<SchoolLiveSubjects[]>(`/school/live/level/subject?schoolid=${user.schoolid}&levelid=${user.levelid}`);
    setSchoolLiveClassesSubject(response.data);
    setIsLoading(false);
  }, [user]);

  const handleSelectVideo = useCallback((video: SchoolLiveClasses) => {
    setSelectedVideo(video);
  }, [setSelectedVideo]);

  const filters = useMemo(() => {
    const items = recordedLiveClasses.map((item) => (item.filter));
    const noRepeatedItems: Array<string> = [];
    items.map((item) => !noRepeatedItems.includes(item) && noRepeatedItems.push(item));

    return noRepeatedItems;
  }, [recordedLiveClasses]);

  useEffect(() => {
    getLiveClassesSubject();
    getLiveClasses();
  }, [getLiveClassesSubject, getLiveClasses]);

  return (
    <Container>
      <LiveClassesSideMenu
        schoolLiveClassesSubjects={schoolLiveClassesSubject}
        recordedLiveClasses={recordedLiveClasses}
        liveClasses={liveClasses}
        filters={filters}
        selectedSubjectPosition={selectedSubjectPosition}
        selectedVideoPostition={selectedVideo.classid}
        isLoading={isLoading}
        onClassChange={handleSelectVideo}
        onLiveClassChange={handleChangeLiveClass}
      />
      <VideoContainer>
        <VimeoComponent
          large
          url={selectedVideo.url}
          video={selectedVideo}
          onPause={(info) => console.log(info)}
          onFinish={(info) => console.log(info)}
        />
      </VideoContainer>
    </Container>
  );
};

export default AoVivo;