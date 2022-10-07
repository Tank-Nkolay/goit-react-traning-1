import React from 'react';
import axios from 'axios';

axios.defaults.baseURL = 'https://hn.algolia.com/api/v1';

const ArticleList = ({ articles }) => (
  <ul>
    {articles.map(({ objectID, url, title }) => (
      <li key={objectID}>
        <a href={url} target="_blank" rel="noreferrer noopener">
          {title}
        </a>
      </li>
    ))}
  </ul>
);

class Http extends React.Component {
  state = {
    articles: [],
    isLoading: false,
    error: null,
  };

  //    критерий запроса на сервер
  //    пока ждем показываем индикатор загрузки
  //    отлавливаем ошибку
  async componentDidMount() {
    // сам индикатор
    this.setState({ isLoading: true });
    try {
      const response = await axios.get('/search?query=react');
      this.setState({ articles: response.data.hits });
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({ isLoading: false });
    }
  }

  render() {
    const { articles, isLoading, error } = this.state;
    return (
      <div>
        {error && <p>Whoops, something went wrong: {error.message}</p>}
        {isLoading && <p>Loading...</p>}
        {/* условие - если > 0 */}
        {articles.length > 0 && <ArticleList articles={articles} />}
      </div>
    );
  }
}

export default Http;
