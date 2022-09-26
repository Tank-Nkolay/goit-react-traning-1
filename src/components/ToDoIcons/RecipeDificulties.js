import { Wraper, Title, BedgeList, Bedge } from './RecipeDificulties.styled';

// выносим значения в константу и морозим, чтобы нельзя было изменить ее
const recipeDifficulties = Object.freeze({
  easy: 'easy',
  medium: 'medium',
  hard: 'hard',
});

export const RecipeDificulties = ({ difficulty }) => {
  return (
    <Wraper>
      <Title>Difficulty</Title>
      <BedgeList>
        <Bedge selected={difficulty === recipeDifficulties.easy}>Easy</Bedge>
        <Bedge selected={difficulty === recipeDifficulties.medium}>
          Medium
        </Bedge>
        <Bedge selected={difficulty === recipeDifficulties.hard}>Hard</Bedge>
      </BedgeList>
    </Wraper>
  );
};
