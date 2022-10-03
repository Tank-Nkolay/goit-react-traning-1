import React from 'react';
import { Container, Box, BoxOne, BoxRadioButton, Button } from './Input.styled';

class Form extends React.Component {
  state = {
    name: ' ',
    tag: ' ',
    experience: 'junior',
  };
  // ======================================================

  //   метод универсального ввода на две формы
  handleChange = e => {
    // таже функция но деструкторизировали
    // const { name, value, experience, tag } = e.currentTarget;
    // this.setState({
    //   [name]: value,
    //   [experience]: value,
    //   [tag]: value,
    // });

    // классический метод
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value,
    });
    this.setState({
      [e.currentTarget.tag]: e.currentTarget.value,
    });
    this.setState({
      [e.currentTarget.experience]: e.currentTarget.value,
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

  // РАДИОБАТОН, пока не работает но должен
  render() {
    return (
      <Container>
        {/* связь между input и value, через атрибут value */}
        <form onSubmit={this.handleSubmit}>
          <Box>
            <BoxOne>
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
            </BoxOne>
            <BoxRadioButton>
              <p>Ваш уровень:</p>
              <label>
                <input
                  type="radio"
                  name="experience"
                  value="junior"
                  onChange={this.handleSubmit}
                  checked={this.state.experience === 'junior'}
                />
                Junior
              </label>
              <label>
                <input
                  type="radio"
                  name="experience"
                  value="middle"
                  onChange={this.handleSubmit}
                  checked={this.state.experience === 'middle'}
                />
                Middle
              </label>
              <label>
                <input
                  type="radio"
                  name="experience"
                  value="senior"
                  onChange={this.handleSubmit}
                  checked={this.state.experience === 'senior'}
                />
                Senior
              </label>
            </BoxRadioButton>

            <Button type="submit">Отправить</Button>
          </Box>
        </form>
      </Container>
    );
  }
}

export default Form;
