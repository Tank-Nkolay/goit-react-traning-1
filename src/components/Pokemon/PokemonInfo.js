import React from 'react';

class PokemonInfo extends React.Component {
  state = {
    pokemon: null,
    error: null,
    // для state машины
    status: 'idle',
  };

  componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.pokemonName;
    const nextName = this.props.pokemonName;
    if (prevName !== nextName) {
      //   console.log('Изменилось имя покемона');
      // включаем ЛОАДЕР, обнуляем ПОКЕМОН
      this.setState({ status: 'pending' });
      fetch(`https://pokeapi.co/api/v2/pokemon/${nextName}`)
        .then(response => {
          if (response.ok) {
            return response.json();
          }
          //   так мы обрабатываем 404 ошибку
          return Promise.reject(new Error(`Нет покемона с именем ${nextName}`));
        })
        .then(pokemon => this.setState({ pokemon, status: 'resolved' }))
        .catch(error => this.setState({ error, status: 'rejected' }));
      console.log(this.error);
    }
  }

  render() {
    const { pokemon, error, status } = this.state;
    // state машина
    if (status === 'idle') {
      return <div>Введите имя покемона</div>;
    }
    if (status === 'pending') {
      return <h2>Загружаем ...</h2>;
    }
    if (status === 'rejected') {
      return <h2>{error.message}</h2>;
    }
    if (status === 'resolved') {
      return (
        <div>
          <p>{pokemon.name}</p>
          <img
            src={pokemon.sprites.other['official-artwork'].front_default}
            width="240"
            alt={pokemon.name}
          />
        </div>
      );
    }
  }
}

export default PokemonInfo;
