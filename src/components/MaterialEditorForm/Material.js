function Material({ item, onDelete, onUpdate }) {
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
    </div>
  );
}

export default Material;
