const Publication = ({ currentItem }) => {
  return (
    <article>
      <h2>{currentItem.title}</h2>
      <p>{currentItem.text}</p>
    </article>
  );
};

export default Publication;
