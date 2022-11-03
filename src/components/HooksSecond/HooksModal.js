import { useState } from 'react';
import { Box, ModalWindow } from './HooksModal.styled';

const Modal = ({ url, onClose }) => {
  return (
    <ModalWindow>
      <p>MODAL</p>
      <p>URL: {url}</p>
      <button onClick={onClose}>Закрыть</button>
    </ModalWindow>
  );
};

const List = ({ items }) => {
  return (
    <div>
      {items.map(item => (
        <ListItem key={item.large} item={item} />
      ))}
    </div>
  );
};

const ListItem = ({ item }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <div onClick={() => setIsModalOpen(true)}>{item.large}</div>
      {isModalOpen && (
        <Modal url={item.large} onClose={() => setIsModalOpen(false)} />
      )}
    </div>
  );
};

export default function HooksModal() {
  const [images] = useState([
    { preview: 'preview-1', large: 'large-1' },
    { preview: 'preview-2', large: 'large-2' },
    { preview: 'preview-3', large: 'large-3' },
  ]);

  return (
    <Box>
      <h3>Вариант модального окна на хуках</h3>
      <List items={images} />
    </Box>
  );
}
