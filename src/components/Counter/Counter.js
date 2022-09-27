import React from 'react';
import Controls from './Controls';

// пример компонент класса
class Counter extends React.Component {
  // ДЕФОЛТНОЕ значение ПРОПС
  static defaultProps = {
    initialValue: 5,
  };
  static propTypes = {
    //
  };

  // Передаем стартовое значение через ПРОПС, новый вариант через БАБЕЛЬ
  state = {
    value: this.props.initialValue,
  };

  //   функция изменения числа ( СЧЕТЧИК + ) вместо prevState, можно например e
  handleIncrimente = () => {
    this.setState(prevState => ({
      value: prevState.value + 1,
    }));
  };
  //   функция уменьшения числа
  handleDecremente = () => {
    this.setState(prevState => ({
      value: prevState.value - 1,
    }));
  };

  // выносим часть разметки и связываем ее через ПРОПС
  render() {
    return (
      <div>
        <span>{this.state.value}</span>
        <Controls
          onIncrimente={this.handleIncrimente}
          onDecremente={this.handleDecremente}
        />
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

// ========================
// КЛАСИЧЕСКИЙ СТАРЫЙ вариант ======
// constructor() {
//   super();
//   this.state = {
//     value: 5,
//   };
// }
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

//   функция изменения числа ( ПЕРЕЗАПИСЫВАЕМ )
// handleIncrimente = () => {
//   this.setState({
//     value: 10,
//   });
// };
// ============================================================================
// handleIncrimente = () => {
//   this.setState(prevState => {
//     return { value: prevState.value + 1 };
//   });
// };
//   функция уменьшения числа
// handleDecremente = () => {
//   this.setState(prevState => {
//     return { value: prevState.value - 1 };
//   });
// };
// ============================================================================
