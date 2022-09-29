import React from 'react';
import { Box, Card, Button } from './ColorPicker.styled';

class ColorPicker extends React.Component {
  render() {
    return (
      <Box>
        <h2>Color picker</h2>
        {/* this.props.options достукиваемся до ПРОПС */}
        <Card>
          {this.props.options.map(({ label, color }) => (
            <Button key={label} style={{ backgroundColor: color }}></Button>
          ))}
        </Card>
      </Box>
    );
  }
}

export default ColorPicker;
