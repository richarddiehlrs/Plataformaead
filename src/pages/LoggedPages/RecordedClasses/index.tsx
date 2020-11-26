import React from 'react';
import { FiCamera } from 'react-icons/fi';
import { FaRegQuestionCircle } from 'react-icons/fa';

import VimeoComponent from 'components/Atoms/VimeoComponent';
import Separator from 'components/Atoms/Separator';
import CourseSideMenu from 'components/Mols/CourseSideMenu';

import {
  Container, Content, VideoContainer, OptionsContainer, LiveClasses, Doubts, StyledButton,
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
        <OptionsContainer>
          <LiveClasses>
            <FiCamera size={26} />
            <strong>Aula</strong>
            <p>ao vivo</p>
            <StyledButton>ASSISTIR</StyledButton>
          </LiveClasses>
          <Separator type="vertical" customColor="rgba(187,187,187)" customHeight={100} />
          <Doubts>
            <FaRegQuestionCircle size={26} />
            <strong>Plantão</strong>
            <p>de dúvidas</p>
            <StyledButton>ACESSAR</StyledButton>
          </Doubts>
        </OptionsContainer>
      </Content>
    </Container>
  );
};

export default RecordedClasses;
