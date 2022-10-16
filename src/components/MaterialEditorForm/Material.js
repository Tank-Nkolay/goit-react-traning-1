import React from 'react';

const EditMaterialModal = ({ onClose, onEdit }) => {
  return (
    <div>
      <h2>Модалка редактировать матеиал</h2>
      {/* если хотим чтобы после КЛИК РЕДАКТИРОВАТЬ модалка закрывалась */}
      <button
        type="button"
        onClick={() => {
          onEdit();
          onClose();
        }}
      >
        Точно редактировать !
      </button>
      <button type="button" onClick={onClose}>
        Закрыть
      </button>
    </div>
  );
};

class Material extends React.Component {
  state = {
    isModalOpen: false,
  };

  openModal = () => this.setState({ isModalOpen: true });
  closeModal = () => this.setState({ isModalOpen: false });

  render() {
    const { item, onDelete, onUpdate } = this.props;
    const { isModalOpen } = this.state;

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
        <button type="button" onClick={this.openModal}>
          Редактировать
        </button>
        {isModalOpen && (
          <EditMaterialModal
            onClose={this.closeModal}
            onEdit={() => onUpdate({ id: item.id, title: Date.now() })}
          />
        )}
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
