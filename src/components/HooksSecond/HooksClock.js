import { useState, useEffect, useRef } from 'react';
import { Container } from './HooksClock.styled';

export default function HooksClock() {
  const [time, setTime] = useState(() => new Date());
  // при помощи useRef объект вызывается 1 раз при первом рендере и ВСЕ и больше не вызывается
  // useRef задает значение current и оно постоянно дальше (не перерендеривается)
  const intervalId = useRef(null);

  useEffect(() => {
    intervalId.current = setInterval(() => {
      setTime(new Date());
    }, 1000);
  }, []);

  const stop = () => {
    clearInterval(intervalId.current);
  };

  return (
    <Container>
      <p>{time.toLocaleTimeString()}</p>
      <button type="button" onClick={stop}>
        Остановить
      </button>
    </Container>
  );
}
