import { useReducer } from 'react';
import { Box } from './HooksCounterSecond.styled';

function countReducer(prevState, nextState) {
  return prevState + nextState;
}

export default function HooksCounterSecond() {
  const [count, setCount] = useReducer(countReducer, 0);

  return (
    <Box>
      <p>Значение = {count}</p>
      <button type="button" onClick={() => setCount(1)}>
        Увеличить на 1
      </button>
      <button type="button" onClick={() => setCount(-1)}>
        Уменьшить на 1
      </button>
    </Box>
  );
}

// =============================================================
// ВАРИАНТ ДО РЕФАКТОРИНГА
// =============================================================
// export default function HooksCounterSecond() {
//       const [counter, setCounter] = useState(0);

//     //   задаем логику, предыдущее состояние + или - 1
//     const handleCounterIncrement = () => {
//       setCounter(state => state + 1);
//     };
//     const handleCounterDecrement = () => {
//       setCounter(state => state - 1);
//     };

//     return (
//       <Box>
//         <p>Значение = {counter}</p>
//         <button type="button" onClick={handleCounterIncrement}>
//           Увеличить на 1
//         </button>
//         <button type="button" onClick={handleCounterDecrement}>
//           Уменьшить на 1
//         </button>
//       </Box>
//     );
//   }
// =============================================================
