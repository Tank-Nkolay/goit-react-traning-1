import { useState, useEffect } from 'react';
import axios from 'axios';

const fetchArticles = ({
  searchQuery = '',
  currentPage = 1,
  pageSize = 5,
} = {}) => {
  return axios
    .get(
      `https://newsapi.org/v2/everything?q=${searchQuery}&pageSize=${pageSize}&page=${currentPage}`
    )
    .then(response => response.data.articles);
};

export default function HooksNews() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchArticles({ searchQuery: 'css' }).then(responseArticles =>
      setArticles(responseArticles)
    );
  }, []);

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
