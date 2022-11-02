import { useState } from 'react';

export default function NewsSearchForm({ onSubmit }) {
  const [query, setQuery] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(query);
    setQuery('');
  };

  const handleChange = e => setQuery(e.currentTarget.value);

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={query} onChange={handleChange} />
      <button type="button">Поиск</button>
    </form>
  );
}
