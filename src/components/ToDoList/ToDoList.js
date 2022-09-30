import React from 'react';
import { Container, Li, Text, Button } from './ToDoList.styled';

class ToDoList extends React.Component {
  state = {
    todos: [
      { id: 'id-1', text: 'дело-1', completed: false },
      { id: 'id-2', text: 'дело-2', completed: false },
      { id: 'id-3', text: 'дело-3', completed: false },
      { id: 'id-4', text: 'дело-4', completed: false },
      { id: 'id-5', text: 'дело-5', completed: false },
    ],
  };
  // ======================================================
  onDeleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };
  // ======================================================
  render() {
    return (
      <Container>
        {this.state.todos.map(({ id, text }) => (
          <Li key={id}>
            <Text>{text}</Text>
            <Button onClick={() => this.onDeleteTodo(id)}>Удалить</Button>
          </Li>
        ))}
      </Container>
    );
  }
}

export default ToDoList;

// onClick={() => this.onDeleteTodo(id)}
