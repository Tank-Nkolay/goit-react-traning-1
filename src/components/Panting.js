// импорт библиотеки протайпс (проверка)
import PropTypes from 'prop-types';
// импорт дефолтной картинки
import defaultImg from '../default.jpg';

// функция которая задает разметку
export default function Panting({
  // входящие пропсы (значения) функции
  imgUrl = defaultImg,
  title,
  profileUrl,
  autor = 'не известно',
  price,
}) {
  return (
    <div>
      <img src={imgUrl} alt={title} width="480" />
      <h2>{title}</h2>
      <p>
        Автор: <a href={profileUrl}>{autor}</a>
      </p>
      <p>Цена: {price} кредитов</p>
      <p>Доступность: В наличии или заканчивается</p>
      <button type="button"></button>
    </div>
  );
}

// проверяем значение которое приходит
Panting.propTypes = {
  imgUrl: PropTypes.string,
  title: PropTypes.string,
  profileUrl: PropTypes.string,
  autor: PropTypes.string,
  price: PropTypes.number,
};
