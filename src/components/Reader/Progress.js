const Progress = ({ currentIdx, totalItems }) => {
  return (
    <p>
      {currentIdx}/{totalItems}
    </p>
  );
};

export default Progress;
