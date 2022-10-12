import React from 'react';

class PokemonInfo extends React.Component {
  state = {
    pokemon: null,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.pokemonName;
    const nextName = this.props.pokemonName;
    if (prevName !== nextName) {
      console.log('Изменилось имя покемона');
      fetch(`https://pokeapi.co/api/v2/pokemon/${nextName}`)
        .then(res => res.json())
        .then(pokemon => this.setState({ pokemon }));
    }
  }

  render() {
    return (
      <div>
        <h2>PokemonInfo</h2>
        {this.state.pokemon && (
          <div>Тут будет покемон: {this.state.pokemon.name}</div>
        )}
      </div>
    );
  }
}

export default PokemonInfo;
