import React, { Component } from 'react';
// import { Container } from './Hooks.styled';

export default class SignupForm extends Component {
  state = {
    email: '',
    password: '',
  };

  handleChange = evt => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };

  render() {
    <form autoComplete="off">
      <label>
        <span>Почта</span>
        <input
          type="email"
          name="email"
          onChange={this.handleChange}
          value={this.state.email}
        />
      </label>

      <label>
        <span>Пароль</span>
        <input
          type="password"
          name="password"
          onChange={this.handleChange}
          value={this.state.password}
        />
      </label>

      <button type="submit">Зарегистрироваться</button>
    </form>;
  }
}
