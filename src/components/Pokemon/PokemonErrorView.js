import errorImg from '../../jpg/errorImg.jpg';

function PokemonErrorView({ message }) {
  return (
    <div>
      <img src={errorImg} width="240" alt="sadunicorn" />
      <p>{message}</p>
    </div>
  );
}

export default PokemonErrorView;
