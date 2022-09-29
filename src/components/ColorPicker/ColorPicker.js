import React from 'react';
import { Box, Card, Button } from './ColorPicker.styled';

class ColorPicker extends React.Component {
  state = {
    activeOptionsIdx: 1,
  };

  //   функция выделения при клике
  setActiveIdx = index => {
    this.setState({ activeOptionsIdx: index });
  };

  render() {
    // деструкторизируем label и забираем его из значения с учетом индекса
    const { label } = this.props.options[this.state.activeOptionsIdx];

    return (
      <Box>
        <h2>Color picker</h2>
        <p>Выбран цвет: {label}</p>
        {/* this.props.options достукиваемся до ПРОПС */}
        <Card>
          {this.props.options.map(({ label, color }, index) => (
            <Button
              key={label}
              style={{
                backgroundColor: color,
                transform:
                  index === this.state.activeOptionsIdx ? 'scale(1.2)' : 'none',
              }}
              onClick={() => this.setActiveIdx(index)}
            ></Button>
          ))}
        </Card>
      </Box>
    );
  }
}

export default ColorPicker;

// выделение елемента по его index
/* <Button
key={label}
style={{
  backgroundColor: color,
  border:
    index === this.state.activeOptionsIdx
      ? '5px solid black'
      : 'none',
}}
></Button>  */

// функция под разметку css
// makeClassName = index => {
//     const optionClasses = ['ColorPicker__option'];
//     if (index === this.state.activeOptionsIdx) {
//       optionClasses.push('ColorPicker__option--active');
//     }
//     return optionClasses.join(' ');
//   };
