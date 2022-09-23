import styled from '@emotion/styled';

export const Container = styled.div`
  background-color: #aaa;
`;

// функция управления локальным ПРОПС на элементе разметки
// ====================================================

// вариант с выносом условия в функцию
const setColor = props => {
  switch (props.a) {
    case true:
      // color green
      return 'rgb(16, 154, 55)';
    // color red
    case false:
      return 'rgb(218, 22, 22)';

    // на всякий случай дефолтный цвет
    default:
      return 'rgb(218, 22, 22)';
  }
};
// ====================================================

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
