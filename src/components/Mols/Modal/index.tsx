import React from 'react';
import { FiXCircle } from 'react-icons/fi';

import { Container, Content, CloseButton } from './styles';

interface ModalInterface{
    onClose(): void;
}

const Modal: React.FC<ModalInterface> = ({ children, onClose }) => (
  <Container>
    <Content>
      <CloseButton onClick={onClose}>
        <FiXCircle size={30} />
      </CloseButton>
      {children}
    </Content>
  </Container>
);

export default Modal;
