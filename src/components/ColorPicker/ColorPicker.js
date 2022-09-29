import React from 'react';
import { Box, Card, Span } from './ColorPicker.styled';

const ColorPicker = ({ options }) => (
  <Box>
    <h2>Color picker</h2>
    <Card>
      {options.map(({ label, color }) => (
        <Span key={label} style={{ backgroundColor: color }}></Span>
      ))}
    </Card>
  </Box>
);

export default ColorPicker;
