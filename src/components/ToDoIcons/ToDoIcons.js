import PropTypes from 'prop-types';
import { HiOutlineChartBar } from 'react-icons/hi';
import { BiAlarm, BiDialpad } from 'react-icons/bi';

import {
  Card,
  RecipeName,
  InfoContainer,
  InfoBlock,
  Label,
  DiffWraper,
  DiffTitle,
  BedgeList,
  Bedge,
} from './ToDoIcons.styled';

// выносим значения в константу и морозим, чтобы нельзя было изменить ее
const recipeDifficulties = Object.freeze({
  easy: 'easy',
  medium: 'medium',
  hard: 'hard',
});

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
      <DiffWraper>
        <DiffTitle>Difficulty</DiffTitle>
        <BedgeList>
          <Bedge selected={difficulty === recipeDifficulties.easy}>Easy</Bedge>
          <Bedge selected={difficulty === recipeDifficulties.medium}>
            Medium
          </Bedge>
          <Bedge selected={difficulty === recipeDifficulties.hard}>Hard</Bedge>
        </BedgeList>
      </DiffWraper>
    </Card>
  );
}

ToDoIcons.propTypes = {
  recipe: PropTypes.shape({
    name: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    servings: PropTypes.number.isRequired,
    calories: PropTypes.number.isRequired,
    // жосткий ПРОПС, ожидаем только эти значения
    difficulty: PropTypes.oneOf(['easy', 'medium', 'hard']),
  }),
};
