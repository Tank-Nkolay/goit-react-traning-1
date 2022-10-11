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
    return (
      <div>
        <section>
          <button
            type="button"
            disabled={this.state.index === 0}
            onClick={() => this.changeIdx(-1)}
          >
            Назад
          </button>
          <button type="button" onClick={() => this.changeIdx(1)}>
            Вперед
          </button>
        </section>
        <p>
          {this.state.index + 1}/{this.props.items.length}
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
