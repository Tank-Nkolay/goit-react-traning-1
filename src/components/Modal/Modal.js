import React from 'react';
import { Container } from './Modal.styled';

class Modal extends React.Component {
  state = {};

  render() {
    return (
      <div>
        <Container>{this.props.children}</Container>
      </div>
    );
  }
}

export default Modal;
