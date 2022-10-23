import { useState } from 'react';
import PokemonForm from './PokemonForm';
import PokemonInfo from './PokemonInfo';
import { Container } from './HooksPokemon.styled';

export default function HooksPokemon() {
  const [pokemonName, setPokemonName] = useState('');

  return (
    <Container>
      <PokemonForm onSubmit={setPokemonName} />
      <PokemonInfo pokemonName={pokemonName} />
    </Container>
  );
}
