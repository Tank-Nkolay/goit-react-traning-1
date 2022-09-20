import Panting from './Panting';

export default function PantingsList({ items }) {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          <Panting
            imgUrl={item.url}
            title={item.title}
            profileUrl={item.author.url}
            autor={item.author.tag}
            price={item.price}
            guantity={item.guantity}
          />
        </li>
      ))}
    </ul>
  );
}
