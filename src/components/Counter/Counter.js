import React from 'react';

// пример компонент класса
class Counter extends React.Component {
  render() {
    return (
      <div>
        <span>0</span>
        <div>
          <button>Увеличить на 1</button>
          <button>Уменьшить на 1</button>
        </div>
      </div>
    );
  }
}

export default Counter;
