import React, { Component } from 'react';
import { Container } from './HooksClock.styled';

export default class HooksClock extends Component {
  state = {
    time: new Date().toLocaleTimeString(),
  };

  intervalId = null;

  componentDidMount() {
    this.intervalId = setInterval(
      () => this.setState({ time: new Date().toLocaleTimeString() }),
      1000
    );
  }

  componentWillUnmount() {
    this.stop();
  }

  stop = () => {
    clearInterval(this.intervalId);
  };

  render() {
    return (
      <Container>
        <p>{this.state.time}</p>
        <button type="button" onClick={this.stop}>
          Остановить
        </button>
      </Container>
    );
  }
}
