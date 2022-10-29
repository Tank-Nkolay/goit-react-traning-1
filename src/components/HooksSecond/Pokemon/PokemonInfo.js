import { useState, useEffect } from 'react';
import PokemonErrorView from './PokemonErrorView';
import PokemonDataView from './PokemonDataView';
import PokemonPendingView from './PokemonPendingView';
import { api } from './pokemon-api.js';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

export default function PokemonInfo({ pokemonName }) {
  const [pokemon, setPokemon] = useState(null);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);

  useEffect(() => {
    // проверка, если пустая строка ВЫХОДИМ (иначе все упадет)
    // тоесть, мы не делаем запрос по пустой строке

    if (!pokemonName) {
      return;
    }

    setStatus(Status.PENDING);
    api
      .fetchPokemon(pokemonName)
      .then(pokemon => {
        setPokemon(pokemon);
        setStatus(Status.RESOLVED);
      })
      .catch(error => {
        setError(error);
        setStatus(Status.REJECTED);
      });
  }, [pokemonName]);

  // state машина
  if (status === 'idle') {
    return <div>Введите имя покемона</div>;
  }
  if (status === 'pending') {
    return <PokemonPendingView pokemonName={pokemonName} />;
  }
  if (status === 'rejected') {
    return <PokemonErrorView message={error.message} />;
  }
  if (status === 'resolved') {
    return <PokemonDataView pokemon={pokemon} />;
  }
}

// полный код запроса FETCH =================================
// fetch(`https://pokeapi.co/api/v2/pokemon/${nextName}`)
// .then(response => {
//   if (response.ok) {
//     return response.json();
//   }
//   //   так мы обрабатываем 404 ошибку
//   return Promise.reject(new Error(`Нет покемона с именем ${nextName}`));
// })
// .then(pokemon => this.setState({ pokemon, status: 'resolved' }))
// .catch(error => this.setState({ error, status: 'rejected' }));
// ==========================================================
