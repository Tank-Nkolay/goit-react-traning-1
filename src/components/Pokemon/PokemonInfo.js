import React from 'react';
import PokemonErrorView from './PokemonErrorView';
import PokemonDataView from './PokemonDataView';

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
      return <PokemonErrorView message={error.message} />;
    }
    if (status === 'resolved') {
      return <PokemonDataView pokemon={pokemon} />;
    }
  }
}

export default PokemonInfo;
