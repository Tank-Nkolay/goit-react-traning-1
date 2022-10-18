import React, { Component } from 'react';
import { Container } from './LoadMore.styled';

class LoadMore extends Component {
  state = {
    page: 1,
    query: '',
    items: [],
  };

  handleSubmit = e => {
    e.preventDefault();
    // при сабмите очищаем все, только берем значение query
    this.setState({
      page: 1,
      query: e.target.elements.query.value,
      items: [],
    });
    e.target.reset();
  };

  loadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  componentDidUpdate(_, prevState) {
    // проверяем есть ли изменения по 2 условиям и можем послать fetch запрос
    // логика - ввел запрос, получил данные, если надо добавил количество просматриваемого материала через loadMore
    if (
      prevState.page !== this.state.page ||
      prevState.query !== this.state.query
    ) {
      console.log('fetch data');
    }
  }

  render() {
    return (
      <Container>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="query" />
          <button type="submit">Search</button>
        </form>
        <button onClick={this.loadMore}>Load more</button>
      </Container>
    );
  }
}

export default LoadMore;
