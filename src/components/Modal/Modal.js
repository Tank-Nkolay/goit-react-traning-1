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
      this.props.onClose();
    }
  };

  handleBackdropClick = e => {
    // console.log('Клик');
    // console.log('1', e.currentTarget);
    // console.log('2', e.target);

    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <div onClick={this.handleBackdropClick}>
        <Container>{this.props.children}</Container>
      </div>,
      modalRoot
    );
  }
}
