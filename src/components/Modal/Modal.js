import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import { Container } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  state = {};

  render() {
    return createPortal(
      <div>
        <Container>{this.props.children}</Container>
      </div>,
      modalRoot
    );
  }
}
