import React from 'react';

import AnotationCard from 'components/Atoms/AnotationCard';
import CourseSideMenu from 'components/Mols/CourseSideMenu';

import {
  Container, Content, VideoContainer, AnotationsContainer,
} from './styles';

const Course: React.FC = () => (
  <Container>
    <CourseSideMenu />
    <Content>
      <VideoContainer>
        <img src="https://kanto.legiaodosherois.com.br/w760-h398-gnw-cfill-q80/wp-content/uploads/2020/03/legiao_nY1sQCx90KB2dGLcWrM354mIJfFaHApgNwO7qlUzZk.jpg.jpeg" alt="thumb" />
      </VideoContainer>
      <AnotationsContainer className="hasVerticalScroll">
        <AnotationCard />
        <AnotationCard />
        <AnotationCard />
        <AnotationCard />
        <AnotationCard />
        <AnotationCard />
        <AnotationCard />
        <AnotationCard />
        <AnotationCard />
      </AnotationsContainer>
    </Content>
  </Container>
);

export default Course;
