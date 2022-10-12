import React from 'react';
import { ImSearch } from 'react-icons/im';

class PokemonForm extends React.Component {
  state = {
    pokemonName: '',
  };

  handleNameChange = e => {
    this.setState({ pokemonName: e.currentTarget.value.toLowerCase() });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ pokemonName: '' });
  };

  render() {
    return (
      <form>
        <input />
        <button></button>
      </form>
    );
  }
}

export default PokemonForm;
