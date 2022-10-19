import { useState } from 'react';
import { Box, Card, Button } from './HooksColorPicker.styled';

// options - это props
function HooksColorPicker({ options }) {
  const [activeOptionIdx, setActiveOptionIdx] = useState(0);
  // деструкторизируем label и берем его из props по значению индекс
  const { label } = options[activeOptionIdx].label;

  return (
    <Box>
      <h2>Color picker</h2>
      <p>Выбран цвет: {label}</p>
      <Card>
        {this.props.options.map(({ label, color }, index) => (
          <Button
            key={label}
            style={{
              backgroundColor: color,
              transform:
                index === this.state.activeOptionsIdx ? 'scale(1.2)' : 'none',
            }}
            onClick={() => setActiveOptionIdx(index)}
          ></Button>
        ))}
      </Card>
    </Box>
  );
}

export default HooksColorPicker;

// функция уже не нужна, просто вызываем метод обновления значения
// const setActiveIdx = index => {
//   setActiveOptionIdx(index);
// };
