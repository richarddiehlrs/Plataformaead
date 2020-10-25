import React from 'react';

import Header from '../../components/Header';

import { Container } from './styles';

const AoVivo: React.FC = () => (
  <Container>
    <Header actualTab="aovivo" />
    <p>Aulas ao vivo</p>
  </Container>
);

export default AoVivo;
