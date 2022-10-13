import React from 'react';

class PokemonInfo extends React.Component {
  state = {
    pokemon: null,
    loading: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.pokemonName;
    const nextName = this.props.pokemonName;
    if (prevName !== nextName) {
      console.log('Изменилось имя покемона');
      this.setState({ loading: true });
      fetch(`https://pokeapi.co/api/v2/pokemon/${nextName}`)
        .then(res => res.json())
        .then(pokemon => this.setState({ pokemon }))
        .finally(() => this.setState({ loading: false }));
    }
  }

  render() {
    const { pokemon, loading } = this.state;
    const { pokemonName } = this.props;
    return (
      <div>
        <h2>PokemonInfo</h2>
        {loading && <h2>Загружаем ...</h2>}
        {!pokemonName && <div>Введите имя покемона</div>}
        {pokemon && <div>Тут будет покемон: {pokemon.name}</div>}
      </div>
    );
  }
}

export default PokemonInfo;