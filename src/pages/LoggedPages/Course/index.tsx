import React from 'react';

import AnotationCard from 'components/Atoms/AnotationCard';
import VimeoComponent from 'components/Atoms/VimeoComponent';
import CourseSideMenu from 'components/Mols/CourseSideMenu';

import {
  Container, Content, VideoContainer, AnotationsContainer,
} from './styles';

const Course: React.FC = () => (
  <Container>
    <CourseSideMenu />
    <Content>
      <VideoContainer>
        <VimeoComponent />
        {/* <img src="https://kanto.legiaodosherois.com.br/w760-h398-gnw-cfill-q80/wp-content/uploads/2020/03/legiao_nY1sQCx90KB2dGLcWrM354mIJfFaHApgNwO7qlUzZk.jpg.jpeg" alt="thumb" /> */}
      </VideoContainer>
      <AnotationsContainer className="hasVerticalScroll">
        <AnotationCard time="00:16" description="No início, olhar o pronome do exemplo" />
        <AnotationCard time="00:16" description="No início, olhar o pronome do exemplo" />
        <AnotationCard time="00:16" description="No início, olhar o pronome do exemplo" />
        <AnotationCard time="00:16" description="No início, olhar o pronome do exemplo" />
        <AnotationCard time="00:16" description="No início, olhar o pronome do exemplo" />
        <AnotationCard time="00:16" description="No início, olhar o pronome do exemplo" />
        <AnotationCard time="00:16" description="No início, olhar o pronome do exemplo" />
        <AnotationCard time="00:16" description="No início, olhar o pronome do exemplo" />
        <AnotationCard time="00:16" description="No início, olhar o pronome do exemplo" />
      </AnotationsContainer>
    </Content>
  </Container>
);

export default Course;
