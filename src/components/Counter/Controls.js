import React from 'react';

const Controls = ({ onIncrimente, onDecremente }) => (
  <div>
    <button type="button" onClick={onIncrimente}>
      Увеличить на 1
    </button>
    <button type="button" onClick={onDecremente}>
      Уменьшить на 1
    </button>
  </div>
);

export default Controls;
