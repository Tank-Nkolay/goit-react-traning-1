import PropTypes from 'prop-types';
import ToDoIcons from './ToDoIcons';
import { List } from './ToDoIconsList.styled';

export default function ToDoIconsList({ recipes }) {
  return (
    <List>
      {/* задаем key по INDEX, так можно при условии, что елементы стационарны */}
      {recipes.map((recipe, ind) => (
        <li key={ind}>
          <ToDoIcons recipe={recipe} />
        </li>
      ))}
    </List>
  );
}

// проверяем что должен просто прийти масив
ToDoIconsList.propTypes = {
  recipes: PropTypes.array.isRequired,
};
