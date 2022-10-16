import Material from './Material';

const MaterialsList = ({ items, ...otherProps }) => {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          <Material item={item} {...otherProps} />
          <hr />
        </li>
      ))}
    </ul>
  );
};

export default MaterialsList;
