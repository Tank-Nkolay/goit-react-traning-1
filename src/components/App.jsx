import Panting from './Panting';
import pantings from '../index';

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
      <Panting />
      {/* goit-react-traning-1 */}
    </div>
  );
};
