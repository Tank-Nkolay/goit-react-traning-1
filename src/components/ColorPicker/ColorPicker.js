import React from 'react';
import { Box, Card, Button } from './ColorPicker.styled';

class ColorPicker extends React.Component {
  state = {
    activeOptionsIdx: 3,
  };

  render() {
    return (
      <Box>
        <h2>Color picker</h2>
        {/* this.props.options достукиваемся до ПРОПС */}
        <Card>
          {this.props.options.map(({ label, color }, index) => {
            return (
              <Button
                key={label}
                style={{
                  backgroundColor: color,
                }}
              ></Button>
            );
          })}
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
