import React from 'react';
import { Container } from './Input.styled';

class Input extends React.Component {
  state = {
    name: ' ',
    tag: ' ',
  };
  // ======================================================
  handleNameChange = e => {
    this.setState({ name: e.currentTarget.value });
  };
  handleTagChange = e => {
    this.setState({ tag: e.currentTarget.value });
  };
  // ======================================================
  render() {
    return (
      <Container>
        {/* связь между input и value, через атрибут value */}
        <form>
          <label>
            Имя
            <input
              type="text"
              value={this.state.name}
              onChange={this.handleNameChange}
            />
          </label>
          <label>
            Прозвище
            <input
              type="text"
              value={this.state.tag}
              onChange={this.handleTagChange}
            />
          </label>
        </form>
      </Container>
    );
  }
}

export default Input;
