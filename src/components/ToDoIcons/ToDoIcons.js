import PropTypes from 'prop-types';
import { HiOutlineChartBar } from 'react-icons/hi';
import { BiAlarm, BiDialpad } from 'react-icons/bi';

import { RecipeDificulties } from './RecipeDificulties';

import {
  Card,
  RecipeName,
  InfoContainer,
  InfoBlock,
  Label,
} from './ToDoIcons.styled';

export default function ToDoIcons({
  recipe: { name, time, servings, calories, difficulty },
}) {
  return (
    <Card>
      <RecipeName>{name}</RecipeName>
      <InfoContainer>
        <InfoBlock>
          <HiOutlineChartBar size={24} />
          <Label>{time} min</Label>
        </InfoBlock>
        <InfoBlock>
          <BiAlarm size={24} />
          <Label>{servings} servings</Label>
        </InfoBlock>
        <InfoBlock>
          <BiDialpad size={24} />
          <Label>{calories} calories</Label>
        </InfoBlock>
      </InfoContainer>
      <RecipeDificulties difficulty={difficulty} />
    </Card>
  );
}

// ToDoIcons.propTypes = {
//   recipe: PropTypes.shape({
//     name: PropTypes.string.isRequired,
//     time: PropTypes.string.isRequired,
//     servings: PropTypes.number.isRequired,
//     calories: PropTypes.number.isRequired,
//     // жосткий ПРОПС, ожидаем только эти значения
//     difficulty: PropTypes.oneOf(['easy', 'medium', 'hard']),
//   }),
// };
