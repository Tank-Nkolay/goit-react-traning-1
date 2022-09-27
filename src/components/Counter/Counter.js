import React from 'react';

// пример компонент класса
class Counter extends React.Component {
  handleIncrimente = () => {
    console.log('We cliked more');
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
          <button
            type="button"
            onClick={() => {
              console.log('We cliked less');
            }}
          >
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
