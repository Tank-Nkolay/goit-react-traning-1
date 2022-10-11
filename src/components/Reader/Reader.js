import React from 'react';

class Reader extends React.Component {
  state = {
    index: 0,
  };

  changeIdx = value => {
    this.setState(state => ({ index: state.index + value }));
  };

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
      <div>
        <section>
          <button
            type="button"
            disabled={index === 0}
            onClick={() => this.changeIdx(-1)}
          >
            Назад
          </button>
          <button
            type="button"
            disabled={index + 1 === totalItems}
            onClick={() => this.changeIdx(1)}
          >
            Вперед
          </button>
        </section>
        <p>
          {index + 1}/{totalItems}
        </p>
        <article>
          <h2>{currentItem.title}</h2>
          <p>{currentItem.text}</p>
        </article>
      </div>
    );
  }
}

export default Reader;
