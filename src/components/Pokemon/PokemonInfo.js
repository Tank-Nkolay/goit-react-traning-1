import React from 'react';

class PokemonInfo extends React.Component {
  state = {
    pokemon: null,
    loading: false,
    error: null,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.pokemonName;
    const nextName = this.props.pokemonName;
    if (prevName !== nextName) {
      //   console.log('Изменилось имя покемона');
      // включаем ЛОАДЕР, обнуляем ПОКЕМОН
      this.setState({ loading: true, pokemon: null });
      fetch(`https://pokeapi.co/api/v2/pokemon/${nextName}`)
        .then(response => {
          if (response.ok) {
            return response.json();
          }
          //   так мы обрабатываем 404 ошибку
          return Promise.reject(new Error(`Нет покемона с именем ${nextName}`));
        })
        .then(pokemon => this.setState({ pokemon }))
        .catch(error => this.setState({ error }))
        .finally(() => this.setState({ loading: false }));
      console.log(this.error);
    }
  }

  render() {
    const { pokemon, loading, error } = this.state;
    const { pokemonName } = this.props;
    return (
      <div>
        <h2>Pokemon Info</h2>
        {error && <h2>{error.message}</h2>}
        {loading && <h2>Загружаем ...</h2>}
        {!pokemonName && <div>Введите имя покемона</div>}
        {pokemon && (
          <div>
            <p>{pokemon.name}</p>
            <img
              src={pokemon.sprites.other['official-artwork'].front_default}
              width="240"
              alt={pokemon.name}
            />
          </div>
        )}
      </div>
    );
  }
}

export default PokemonInfo;
