import styled from '@emotion/styled';

export const Container = styled.div`
  background-color: #aaa;
`;

// функция управления локальным ПРОПС на элементе разметки
// ====================================================
export const Title = styled.h2`
  font-size: 48px;

  color: ${props => {
    switch (props.a) {
      case true:
        // color green
        return 'rgb(16, 154, 55)';

      case false:
        return 'rgb(218, 22, 22)';
    }
  }};
`;

// ${props => {
//     console.log(props.type);
//     console.log(props.a);
//     console.log(props.b);
//   }}
// ====================================================
