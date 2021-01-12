import React from 'react';

import {
  Container, Content,
} from './styles';

interface ModalInterface{
    onClose(): void;
}

const Modal: React.FC<ModalInterface> = ({ children, onClose }) => (
  <Container>
    <Content>
      {children}
    </Content>
  </Container>
);

export default Modal;
