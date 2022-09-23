import styled from '@emotion/styled';

// применяем цвет как ШАБЛОН
export const Container = styled.div`
  background-color: ${props => props.theme.colors.gray};
`;

// функция управления локальным ПРОПС на элементе разметки
// ====================================================

// вариант с выносом условия в функцию
// деструкторизировали props в 'a" и добавили деструкторизированную theme. ПОЛЬЗУЕМ
const setColor = ({ a, theme }) => {
  switch (a) {
    case true:
      // color green взятый из ШАБЛОНА
      return theme.colors.green;
    // color red
    case false:
      return 'rgb(218, 22, 22)';

    // на всякий случай дефолтный цвет
    default:
      return 'rgb(218, 22, 22)';
  }
};
// ====================================================
// получаем цвет через функцию
export const Title = styled.h2`
  font-size: 48px;
  color: ${setColor};
`;

// color: ${props => {
//     switch (props.a) {
//       case true:
//         // color green
//         return 'rgb(16, 154, 55)';
//       // color red
//       case false:
//         return 'rgb(218, 22, 22)';

//       // на всякий случай дефолтный цвет
//       default:
//         return 'rgb(218, 22, 22)';
//     }
//   }};

// ${props => {
//     console.log(props.type);
//     console.log(props.a);
//     console.log(props.b);
//   }}
// ====================================================
