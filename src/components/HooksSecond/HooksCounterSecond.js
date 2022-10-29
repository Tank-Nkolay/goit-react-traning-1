import { useState, useEffect } from 'react';
import { Box } from './HooksCounterSecond.styled';

export default function HooksCounterSecond() {
  const [counter, setCounter] = useState(0);

  //   задаем логику, предыдущее состояние + или - 1
  const handleCounterIncrement = () => {
    setCounter(state => state + 1);
  };
  const handleCounterDecrement = () => {
    setCounter(state => state - 1);
  };

  return (
    <Box>
      <p>Значение = {counter}</p>
      <button type="button" onClick={handleCounterIncrement}>
        Увеличить на 1
      </button>
      <button type="button" onClick={handleCounterDecrement}>
        Уменьшить на 1
      </button>
    </Box>
  );
}
