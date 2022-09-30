import React from 'react';
import { Container } from './Input.styled';

class Input extends React.Component {
  state = {
    todos: [
      { id: 'id-1', text: 'дело-1', completed: true },
      { id: 'id-2', text: 'дело-2', completed: false },
      { id: 'id-3', text: 'дело-3', completed: false },
      { id: 'id-4', text: 'дело-4', completed: false },
      { id: 'id-5', text: 'дело-5', completed: true },
    ],
  };
  // ======================================================

  // ======================================================
  render() {
    return (
      <Container>
        <input type="text" />
      </Container>
    );
  }
}

export default Input;
