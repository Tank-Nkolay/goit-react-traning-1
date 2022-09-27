import React from 'react';

// пример компонент класса
class Counter extends React.Component {
  // КЛАСИЧЕСКИЙ СТАРЫЙ вариант ======
  // constructor() {
  //   super();
  //   this.state = {
  //     value: 5,
  //   };
  // }
  // ========================
  // новый вариант через БАБЕЛЬ
  state = {
    value: 6,
  };
  // ========================

  //   функция увеличения числа
  handleIncrimente = () => {
    this.setState({
      value: 10,
    });
  };
  //   функция уменьшения числа
  handleDecremente = () => {};

  render() {
    return (
      <div>
        <span>{this.state.value}</span>
        <div>
          <button type="button" onClick={this.handleIncrimente}>
            Увеличить на 1
          </button>
          <button type="button" onClick={this.handleDecremente}>
            Уменьшить на 1
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;

// вешаем на кнопку обработчик событий
// обработчик встроенная функция РЕАКТ
// синтаксис onСобытие
// варианты собыий в ДОКАХ
// onClick, onSubmit, onChange, onMouseNove

// сделали публичное свойство класса ========================================
//   функция увеличения числа
// handleIncrimente = e => {
//   console.log('We cliked more');
// пример как использовать событие event при асинхронном коде
// const { target } = e;
// setTimeout(() => {
//   console.log(target);
// }, 1000);
// };
//   функция уменьшения числа
// handleDecremente = e => {
//   console.log('We cliked less');
//   console.log(e);
// };
// ============================================================================
