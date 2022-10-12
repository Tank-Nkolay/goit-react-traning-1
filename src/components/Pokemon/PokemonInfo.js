import React from 'react';

class PokemonInfo extends React.Component {
  state = {};

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.pokemonName !== this.props.pokemonName) {
      console.log('Изменилось имя покемона');
      console.log('prevProps.pokemonName', prevProps.pokemonName);
      console.log('this.props.pokemonName', this.props.pokemonName);
    }
  }

  render() {
    return (
      <div>
        <h2>PokemonInfo</h2>
        <p>{this.props.pokemonName}</p>
      </div>
    );
  }
}

export default PokemonInfo;
