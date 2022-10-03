import React from 'react';
// import PropTypes from 'prop-types';

import {
  BoxFormInput,
  Form,
  Label,
  Input,
  Button,
  BoxRadioButton,
} from './FormInput.styled';

class FormInput extends React.Component {
  state = {
    contacts: [],
    name: '',
    experience: 'junior',
  };

  //   метод универсального ввода на две формы
  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  // передача данных во внешнее хранилище
  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmitData(this.state);

    // вызов reset
    this.reset();
  };

  //   функция очистки формы
  reset = () => {
    this.setState({ name: '' });
  };

  render() {
    return (
      <BoxFormInput>
        <Form onSubmit={this.handleSubmit}>
          <Label>
            Name
            <Input
              name="name"
              type="text"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={this.state.name}
              onChange={this.handleChange}
            />
          </Label>

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
          <Button type="submit">Add contacts</Button>
        </Form>
      </BoxFormInput>
    );
  }
}

export default FormInput;

// ===================================
// ДЕФОЛТНОЕ значение ПРОПС
//   static defaultProps = {
//     initialValue: 5,
//   };
// static propTypes = {
//   //
// };
// ===================================
