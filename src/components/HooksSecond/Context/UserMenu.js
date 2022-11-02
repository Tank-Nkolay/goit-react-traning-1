import React, { useContext } from 'react';
import ctx from './contex';
import { Container } from './UserMenu.styled';

export default function UserMenu() {
  const { name } = useContext(ctx);

  console.log('User name');
  console.log(name);

  return (
    <Container>
      <h3>передача Context от родителя напрямую глубоко вниз</h3>
      <button type="button">Войти</button>
      <p>{name}</p>
      <button type="button">Выйти</button>
    </Container>
  );
}
