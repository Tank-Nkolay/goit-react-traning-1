import { ImSpinner } from 'react-icons/im';
// элемент СКЕЛЕТОНА
import PokemonDataView from './PokemonDataView';
import waitImg from '../../jpg/waitImg.png';

// для СПИНЕР стили прописали в index.css и вызвали здесь
export default function PokemonPendingView({ pokemonName }) {
  // элемент СКЕЛЕТОНА (для предварительного дефолтного показа)=======
  const pokemon = {
    name: pokemonName,
    sprites: { other: { 'official-artwork': { front_default: waitImg } } },
    stats: [],
  };
  // ==========================

  return (
    <div>
      <div>
        <ImSpinner size="32" className="icon-spin" />
        Загружаем ...
      </div>
      {/* элемент СКЕЛЕТОНА======= */}
      <PokemonDataView pokemon={pokemon} />
      {/* ======================= */}
    </div>
  );
}
