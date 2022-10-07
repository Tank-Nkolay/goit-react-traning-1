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
  };

  //   критерий запроса на сервер
  //   пока ждем показываем индикатор загрузки
  async componentDidMount() {
    // сам индикатор
    this.setState({ isLoading: true });
    const response = await axios.get('/search?query=react');
    this.setState({
      articles: response.data.hits,
      isLoading: false,
    });
  }

  render() {
    const { articles, isLoading } = this.state;
    return (
      <div>
        {/* сдесь условие - Лоадер или разметка */}
        {isLoading ? <p>Loading...</p> : <ArticleList articles={articles} />}
      </div>
    );
  }
}

export default Http;
