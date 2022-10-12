import React from 'react';
// компонент библиотеки уведомлений
import { toast } from 'react-toastify';
import { ImSearch } from 'react-icons/im';
import { Container } from './PokemonForm.styled';

class PokemonForm extends React.Component {
  state = {
    pokemonName: '',
  };

  //   метод для временного сохранения в state (для фильтр), очистка в другом
  handleNameChange = e => {
    this.setState({ pokemonName: e.currentTarget.value.toLowerCase() });
  };

  //   метод после САБМИТ передача в APP и очистки state name
  handleSubmit = e => {
    e.preventDefault();

    if (this.state.pokemonName.trim() === '') {
      //   alert('Введите имя покемона!');
      toast('Введите имя покемона!', {
        position: 'top-center',
        theme: 'colored',
      });

      return;
    }
    this.props.onFormSubmit(this.state.pokemonName);
    this.setState({ pokemonName: '' });
  };

  render() {
    return (
      <Container>
        <h2>FORM POKEMON</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="pokemonName"
            value={this.state.pokemonName}
            onChange={this.handleNameChange}
          />
          <button type="submit">
            <ImSearch style={{ marginRight: 8 }} />
            Найти
          </button>
        </form>
      </Container>
    );
  }
}

export default PokemonForm;
