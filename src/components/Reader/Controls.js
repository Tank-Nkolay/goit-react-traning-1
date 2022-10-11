const Controls = ({ currentIdx, totalItems, changeIdx }) => {
  return (
    <section>
      <button
        type="button"
        disabled={currentIdx === 1}
        onClick={() => changeIdx(-1)}
      >
        Назад
      </button>
      <button
        type="button"
        disabled={currentIdx === totalItems}
        onClick={() => changeIdx(1)}
      >
        Вперед
      </button>
    </section>
  );
};

export default Controls;
