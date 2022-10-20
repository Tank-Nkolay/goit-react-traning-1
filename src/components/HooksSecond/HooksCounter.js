import { useState, useEffect } from 'react';

function HooksCounter() {
  const [counterA, setCounterA] = useState(0);
  const [counterB, setCounterB] = useState(0);

  // ===============================================================
  //   так запускается при монтировании и при каждом изменении
  //   useEffect(() => {
  //     console.log('Запустил Use Effect');
  //   });
  // ===============================================================
  //   так запускается ТОЛЬКО при монтировании (мы ему сказали, что у него нет зависимости)
  //   useEffect(() => {
  //     console.log('Запустил Use Effect');
  //   }, []);
  // ===============================================================
  //   так запускается ТОЛЬКО при монтировании и изменении состояния counterA
  //   useEffect(() => {
  //     console.log('Запустил Use Effect');
  //   }, [counterA]);
  // ===============================================================
  //   так запускается ТОЛЬКО при монтировании и изменении состояния counterA или counterB
  useEffect(() => {
    const totalClicks = counterA + counterB;
    document.title = `Всего кликнули ${totalClicks} раз`;
  }, [counterA, counterB]);
  // ===============================================================

  //   задаем логику, предыдущее состояние + 1
  const handleCounterAIncrement = () => {
    setCounterA(state => state + 1);
  };

  const handleCounterBIncrement = () => {
    setCounterB(state => state + 1);
  };

  return (
    <>
      <p>{document.title}</p>
      <button type="button" onClick={handleCounterAIncrement}>
        Кликнули коунтер А {counterA}
      </button>
      <button type="button" onClick={handleCounterBIncrement}>
        Кликнули коунтер В {counterB}
      </button>
    </>
  );
}

export default HooksCounter;
