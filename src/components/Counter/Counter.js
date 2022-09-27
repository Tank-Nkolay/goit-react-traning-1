import React from 'react';

// пример компонент класса
class Counter extends React.Component {
  // сделали публичное свойство класса
  //   функция увеличения числа
  handleIncrimente = () => {
    console.log('We cliked more');
    console.log(this);
  };
  //   функция уменьшения числа
  handleDecremente = () => {
    console.log('We cliked less');
    console.log(this);
  };

  render() {
    return (
      <div>
        <span>0</span>
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
