import React from 'react';
import { Container } from './Input.styled';

class Form extends React.Component {
  state = {
    name: ' ',
    tag: ' ',
  };
  // ======================================================

  //   метод универсального ввода на две формы
  handleChange = e => {
    // таже функция но деструкторизировали
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    });

    // классический метод
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };
  //   ================
  //   метод ввода на 1 форму
  //   handleNameChange = e => {
  //     this.setState({ name: e.currentTarget.value });
  //   };
  //   handleTagChange = e => {
  //     this.setState({ tag: e.currentTarget.value });
  //   };
  // ======================================================

  //   передача данных во внешнее хранилище
  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmitData(this.state);

    // вызов reset
    this.reset();
  };

  //   функция очистки формы
  reset = () => {
    this.setState({ name: '', tag: '' });
  };

  render() {
    return (
      <Container>
        {/* связь между input и value, через атрибут value */}
        <form onSubmit={this.handleSubmit}>
          <label>
            Имя
            <input
              name="name"
              type="text"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Прозвище
            <input
              name="tag"
              type="text"
              value={this.state.tag}
              onChange={this.handleChange}
            />
          </label>
          <button type="submit">Отправить</button>
        </form>
      </Container>
    );
  }
}

export default Form;
