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
  guantity,
}) {
  return (
    <div>
      <img src={imgUrl} alt={title} width="180" />
      <h2>{title}</h2>
      <p>
        Автор: <a href={profileUrl}>{autor}</a>
      </p>
      <p>Цена: {price} кредитов</p>
      <p>Доступность: {guantity < 10 ? 'заканчивается' : 'в наличии'}</p>
      <button type="button"></button>
    </div>
  );
}

// проверяем значение которое приходит и обозначаем ОБЯЗАТЛЬНЫЕ ПРОПСЫ (isRequired)
Panting.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  profileUrl: PropTypes.string.isRequired,
  autor: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  guantity: PropTypes.number.isRequired,
};
