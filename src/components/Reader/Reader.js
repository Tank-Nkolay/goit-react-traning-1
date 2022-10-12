import React from 'react';
import Controls from './Controls';
import Progress from './Progress';
import Publication from './Publication';
import { Container } from './Reader.styled';

// константа локал сторедж
const LS_KEY = 'reader-item-index';

class Reader extends React.Component {
  state = {
    index: 0,
  };

  changeIdx = value => {
    this.setState(state => ({ index: state.index + value }));
  };

  //   показывает что компонент смонтирован (первое чтение)
  //   можно получить значение записанное в локал сторедж
  componentDidMount() {
    // console.log(localStorage.getItem(LS_KEY));

    // проверяем если в локал сторедж что-то есть, оно не null, то тогда делаем действие
    // это правильно
    const savedState = localStorage.getItem(LS_KEY);
    if (savedState) {
      const index = Number(localStorage.getItem(LS_KEY));
      this.setState({ index });
    }
  }

  //   показывает изменение состояния (обновление)
  //   записываем в локал сторедж по условию
  //   prevProps меняем на _ , чтобы не ругался сборщик
  componentDidUpdate(_, prevState) {
    if (prevState.index !== this.state.index) {
      localStorage.setItem(LS_KEY, this.state.index);
    }
  }

  // раздельно
  //   onPrev = () => {
  //     this.setState(state => ({ index: state.index - 1 }));
  //   };
  //   onNext = () => {
  //     this.setState(state => ({ index: state.index + 1 }));
  //   };

  render() {
    const currentItem = this.props.items[this.state.index];
    const totalItems = this.props.items.length;
    const { index } = this.state;

    return (
      <Container>
        <h1>Reader</h1>
        <Controls
          currentIdx={index + 1}
          totalItems={totalItems}
          changeIdx={this.changeIdx}
        />
        <Progress currentIdx={index + 1} totalItems={totalItems} />
        <Publication currentItem={currentItem} />
      </Container>
    );
  }
}

export default Reader;
