import React from 'react';
import { Container } from './Input.styled';

class Input extends React.Component {
  state = {
    inputValue: '123',
  };
  // ======================================================
  handleInputChange = e => {
    this.setState({ inputValue: e.currentTarget.value });
  };
  // ======================================================
  render() {
    return (
      <Container>
        {/* связь между input и value, через атрибут value */}
        <input
          type="text"
          value={this.state.inputValue}
          onChange={this.handleInputChange}
        />
      </Container>
    );
  }
}

export default Input;
