import { useState, useEffect } from 'react';
import axios from 'axios';
import NewsSearchForm from './HooksNewsSearch';
import { Container } from './HooksNews.jsx';

// cdda9d9155ed44a284b45bb95e11dea7

axios.defaults.baseURL = 'https://hn.algolia.com/api/v1';

const fetchArticles = ({
  searchQuery = '',
  currentPage = 1,
  pageSize = 5,
  API_KEY = 'cdda9d9155ed44a284b45bb95e11dea7',
} = {}) => {
  return axios
    .get(
      `https://newsapi.org/v2/everything?q=${searchQuery}&pageSize=${pageSize}&page=${currentPage}&apiKey=${API_KEY}`
    )
    .then(response => response.data.articles);
};

export default function HooksNews() {
  const [articles, setArticles] = useState([]);
  const [query, setQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetchArticles({ searchQuery: query, currentPage })
      .then(responseArticles => {
        setArticles(prevArticles => [...prevArticles, ...responseArticles]);
        setCurrentPage(prevCurrentpage => prevCurrentpage + 1);
      })
      .finally(() => setIsLoading(false));
  }, [query, currentPage]);

  const onChangeQuery = query => {
    setQuery(query);
    setCurrentPage(1);
    setArticles([]);
  };

  return (
    <Container>
      <h3>HTTP запрос на внешний сервер</h3>
      <NewsSearchForm onSubmit={onChangeQuery} />

      {isLoading && <p>Loading...</p>}

      <ul>
        {articles.map(({ title, url }) => (
          <li key={title}>
            <a href={url} target="_blank" rel="noopener noreferrer">
              {title}
            </a>
          </li>
        ))}
      </ul>
    </Container>
  );
}
