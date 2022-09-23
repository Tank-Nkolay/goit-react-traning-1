// импорт библиотеки протайпс (проверка)
import PropTypes from 'prop-types';
// импорт дефолтной картинки
import defaultImg from '../../default.jpg';
// ипорт стилей с библитоеки ЕМОУШН и настройка их
import { Container, Title } from './Panting.styled';

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
    <Container>
      <img src={imgUrl ?? defaultImg} alt={title} width="180" />
      <Title>{title}</Title>
      <p>
        Автор: <a href={profileUrl}>{autor}</a>
      </p>
      <p>Цена: {price} кредитов</p>
      <p>Доступность: {guantity < 10 ? 'заканчивается' : 'в наличии'}</p>
      <button type="button"></button>
    </Container>
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
