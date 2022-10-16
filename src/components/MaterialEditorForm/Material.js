import React from 'react';

const EditMaterialModal = () => {
  <button type="button">Редактировать</button>;
  <button type="button">Закрыть</button>;
};

class Material extends React.Component {
  render() {
    const { item, onDelete, onUpdate } = this.props;
    return (
      <div>
        <p>
          <b>Название: </b>
          {item.title}
        </p>
        <p>
          <b>Ссылка: </b>
          {item.link}
        </p>
        <button type="button" onClick={() => onDelete(item.id)}>
          Удалить
        </button>
        <button
          type="button"
          onClick={() => onUpdate({ id: item.id, title: Date.now() })}
        >
          Редактировать
        </button>
        <EditMaterialModal />
      </div>
    );
  }
}

export default Material;

// Вариант без модального окна
// function Material({ item, onDelete, onUpdate }) {
//   return (
//     <div>
//       <p>
//         <b>Название: </b>
//         {item.title}
//       </p>
//       <p>
//         <b>Ссылка: </b>
//         {item.link}
//       </p>
//       <button type="button" onClick={() => onDelete(item.id)}>
//         Удалить
//       </button>
//       <button
//         type="button"
//         onClick={() => onUpdate({ id: item.id, title: Date.now() })}
//       >
//         Редактировать
//       </button>
//     </div>
//   );
// }
