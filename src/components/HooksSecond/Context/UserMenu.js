import React, { useContext } from 'react';
import ctx from './contex';
import { Container } from './UserMenu.styled';

export default function UserMenu() {
  const { user, logIn, logOut } = useContext(ctx);

  // console.log('User name');
  // console.log(user);

  return (
    <Container>
      <h3>передача Context от родителя напрямую глубоко вниз</h3>

      {user ? (
        <>
          {' '}
          <p>{user}</p>
          <button type="button" onClick={logOut}>
            Выйти
          </button>
        </>
      ) : (
        <button type="button" onClick={logIn}>
          Войти
        </button>
      )}
    </Container>
  );
}
