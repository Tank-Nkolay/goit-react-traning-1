import { useState } from 'react';
// компонент библиотеки уведомлений
// import { toast } from 'react-toastify';
import { ImSearch } from 'react-icons/im';
import { Container } from './PokemonForm.styled';

export default function PokemonForm({ onSubmit }) {
  const [pokemonName, setPokemonName] = useState('');

  //   метод для временного сохранения в state (для фильтр), очистка в другом
  const handleNameChange = e => {
    setPokemonName(e.currentTarget.value.toLowerCase());
  };

  //   метод после САБМИТ передача в APP и очистки state name
  const handleSubmit = e => {
    e.preventDefault();

    if (pokemonName.trim() === '') {
      // toast('Введите имя покемона!');
      alert('Введите имя покемона!');
      return;
    }
    onSubmit(pokemonName);
    setPokemonName('');
  };

  return (
    <Container>
      <h2>FORM POKEMON</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="pokemonName"
          value={pokemonName}
          onChange={handleNameChange}
        />
        <button type="submit">
          <ImSearch style={{ marginRight: 8 }} />
          Найти
        </button>
      </form>
    </Container>
  );
}
