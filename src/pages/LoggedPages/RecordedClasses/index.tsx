import React from 'react';
// import { FiCamera } from 'react-icons/fi';
// import { FaRegQuestionCircle } from 'react-icons/fa';

import VimeoComponent from 'components/Atoms/VimeoComponent';
// import Separator from 'components/Atoms/Separator';
import AnnotationCard from 'components/Atoms/AnnotationCard';
import CourseSideMenu from 'components/Mols/CourseSideMenu';

import {
  Container, Content, VideoContainer, AnnotationsContainer,
} from './styles';

const RecordedClasses: React.FC = () => {
  console.log('oi');

  return (
    <Container>
      <CourseSideMenu customType="recordedClasses" />
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
