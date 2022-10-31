import { useState, useMemo } from 'react';

const initialFriends = [
  'Tom Tompson',
  'Gari Garisson',
  'Peater Perker',
  'Jay Jonson',
  'Kristi Anderson',
  'Jack Way',
  'Jon Smoll',
  'Kayt Roylson',
];

export default function HooksFriendsList() {
  const [count, setCount] = useState(0);
  const [friends] = useState(initialFriends);
  const [filter, setFilter] = useState('');

  // используем когда нужно указать зависимость и делать ТОЛЬКО ЗДЕСЬ ПЕРЕРЕНДЕР
  // используем чтобы получить значения ФУНКЦИИ и передать дальше
  // используем когда большая коллекция значений
  const visibleFriends = useMemo(() => {
    return friends.filter(friend => friend.toLowerCase().includes(filter));
  }, [friends, filter]);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>{count}</button>
      <hr />
      <input onChange={e => setFilter(e.target.value)} value={filter} />
      <ul>
        {visibleFriends.map((friend, idx) => (
          <li key={idx}>{friend}</li>
        ))}
      </ul>
    </div>
  );
}
