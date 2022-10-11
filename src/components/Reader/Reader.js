import React from 'react';
import Controls from './Controls';
import Progress from './Progress';
import Publication from './Publication';

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
        <Controls
          currentIdx={index + 1}
          totalItems={totalItems}
          changeIdx={this.changeIdx}
        />
        <Progress currentIdx={index + 1} totalItems={totalItems} />
        <Publication currentItem={currentItem} />
      </div>
    );
  }
}

export default Reader;
