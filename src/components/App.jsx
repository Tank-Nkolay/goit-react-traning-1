// импорт функции разметки
import Panting from './Panting';
// импорт масива данных для разметки (для пропсов)
import pantings from '../pantings.json';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Panting
        imgUrl={pantings.url}
        title={pantings.title}
        profileUrl={pantings.author.url}
        autor={pantings.author.tag}
        price={pantings.price}
      />
      {/* goit-react-traning-1 */}
    </div>
  );
};
