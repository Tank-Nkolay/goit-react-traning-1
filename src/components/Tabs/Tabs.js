import React, { Component } from 'react';
import { Container } from './Tabs.styled';

export default class Tabs extends Component {
  state = {
    activeTabIdx: 0,
  };

  //   чтобы небыло перерендера когда он не нужен
  shouldComponentUpdate(nextProps, nextState) {
    return nextState.activeTabIdx !== this.state.activeTabIdx;
  }

  setActiveTanIdx = idx => {
    this.setState({ activeTabIdx: idx });
  };

  render() {
    console.log(`Re-render @ ${Date.now()}`);

    const { activeTabIdx } = this.state;
    const { items } = this.props;
    const activeTab = items[activeTabIdx];

    return (
      <Container>
        <div>
          {items.map((item, idx) => (
            <button
              type="button"
              key={item.label}
              onClick={() => this.setActiveTanIdx(idx)}
            >
              {item.label}
            </button>
          ))}
        </div>
        <div>
          <h2>{activeTab.label}</h2>
          <p>{activeTab.content}</p>
        </div>
      </Container>
    );
  }
}
