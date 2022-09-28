import React from 'react';
import { Button, Menu } from './Dropdown.styled';

class Dropdown extends React.Component {
  state = {
    visible: false,
  };

  togle = () => {
    this.setState(prevState => ({
      visible: !prevState.visible,
    }));
  };

  //   вариант с двумя функциями и кнопками
  //   show = () => {
  //     this.setState({ visible: true });
  //   };
  //   hide = () => {
  //     this.setState({ visible: false });
  //   };

  render() {
    return (
      <div>
        <Button type="button" onClick={this.togle}>
          {this.state.visible ? 'Скрыть' : 'Показать'}
        </Button>
        {/* <Button type="button" onClick={this.hide}>
          Скрыть
        </Button> */}
        {this.state.visible && <Menu>Выпадающее меню</Menu>}
      </div>
    );
  }
}

export default Dropdown;
