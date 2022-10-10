import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import { Container } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  state = {};

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      console.log('Close');
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <div>
        <Container>{this.props.children}</Container>
      </div>,
      modalRoot
    );
  }
}
