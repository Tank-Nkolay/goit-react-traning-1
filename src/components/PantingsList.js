import PropTypes from 'prop-types';
import Panting from './Panting/Panting';

export default function PantingsList({ items }) {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          <Panting
            imgUrl={item.url}
            title={item.title}
            profileUrl={item.author.url}
            autor={item.author.tag}
            price={item.price}
            guantity={item.guantity}
          />
        </li>
      ))}
    </ul>
  );
}

// проверяем приходящие данные. Должен прийти масив (array) и мы
// описываем вложение масива/ Нам нужно - пришел масив, в нем есть id
PantingsList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};
