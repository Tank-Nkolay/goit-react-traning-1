import React from 'react';
import { Container, Li, Text, Button } from './ToDoList.styled';

const ToDoList = ({ todos }) => (
  <Container>
    {todos.map(({ id, text }) => (
      <Li key={id}>
        <Text>{text}</Text>
        <Button>Удалить</Button>
      </Li>
    ))}
  </Container>
);

export default ToDoList;
