import { useState, useEffect } from 'react';
import { Container } from './Hooks.styled';

const Hooks = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${value} times`;
  });

  return (
    <Container>
      <p>You clicked {value} times</p>
      <button onClick={() => setValue(value + 1)}>Click me</button>
    </Container>
  );
};

export default Hooks;
