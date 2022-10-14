import { ImSpinner } from 'react-icons/im';

// для СПИНЕР стили прописали в index.css и вызвали здесь
function PokemonPendingView({ pokemonName }) {
  return (
    <div>
      <div>
        <ImSpinner size="32" className="icon-spin" />
        Загружаем ... {pokemonName}
      </div>
    </div>
  );
}

export default PokemonPendingView;
