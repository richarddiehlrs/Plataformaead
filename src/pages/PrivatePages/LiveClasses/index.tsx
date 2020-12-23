import React, { useEffect, useState, useCallback } from 'react';

import api from 'services/api';
import { SchoolLiveClasses } from 'models/SchoolModels';

import VimeoComponent from 'components/Atoms/VimeoComponent/LiveClassVimeoComponent';
import LiveClassesSideMenu from 'components/Mols/SideMenus/LiveClassesSideMenu';

import { Container } from './styles';

const AoVivo: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [selectedPosition, setSelectedPosition] = useState(0);

  const [schoolLiveClasses, setSchoolLiveClasses] = useState<SchoolLiveClasses[]>([]);

  const handleChangeLiveClass = useCallback((item: any) => {
    setSelectedPosition(Number(item.key));
    console.log(item);
  }, []);

  const getLiveClasses = useCallback(async () => {
    setIsLoading(true);
    const response = await api.get<SchoolLiveClasses[]>('/school/live/level/subject/class?schoolid=ObjetivoMogiGuaçu&levelid=1EM');
    setSchoolLiveClasses(response.data);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    getLiveClasses();
  }, [getLiveClasses]);

  return (
    <Container>
      <LiveClassesSideMenu
        schoolLiveClasses={schoolLiveClasses}
        onLiveClassChange={handleChangeLiveClass}
        selectedPosition={selectedPosition}
        isLoading={isLoading}
      />
    </Container>
  );
};

export default AoVivo;
