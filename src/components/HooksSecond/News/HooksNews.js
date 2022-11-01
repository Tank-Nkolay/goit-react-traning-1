import { useState, useEffect } from 'react';
import axios from 'axios';

export default function HooksNews() {
  const [articles, setArticles] = useState([]);

  return (
    <div>
      <ul>
        {articles.map(({ title, url }) => (
          <li key={title}>
            <a href={url} target="_blank" rel="noopener noreferrer">
              {title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
