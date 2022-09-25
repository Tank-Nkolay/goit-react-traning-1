// импорт масива данных для разметки (для пропсов)
import pantings from '../../Json/pantings.json';
import recipes from '../../Json/recipes.json';
// импорт ЕМОШИОН стилизация
import { Container } from './App.styled';
// для иконок
import { FaBeer } from 'react-icons/fa';
import { AiFillAudio } from 'react-icons/ai';
// импорт функции разметки
import PantingsList from '../PantingsList';
import Section from '../Section';
import ToDoIconsList from '../ToDoIcons/ToDoIconsList';

export const App = () => {
  return (
    <Container
      style={{
        // height: '100vh',
        // display: 'flex',
        marginLeft: '100px',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        color: '#010101',
      }}
    >
      {/* секция с детьми */}
      <Section title="Топ недели">
        <PantingsList items={pantings} />
      </Section>
      <Section title="LINK">
        <div>rrrrrrr</div>
        <FaBeer />
        <AiFillAudio />
      </Section>
      <Section>
        <ToDoIconsList recipes={recipes} />
      </Section>

      {/* ПРИМЕР как рендарим масив в div*/}
      {/* {[1, 2, 3, 4, 5].map(el => (
        <div>{el}</div>
      ))} */}
      {/* ПРИМЕР рендарим ВЕСЬ масив данных в разметку БЕЗ ДОП ФУНКЦИИ*/}
      {/* {pantings.map(panting => (
        <Panting
          key={panting.id}
          imgUrl={panting.url}
          title={panting.title}
          profileUrl={panting.author.url}
          autor={panting.author.tag}
          price={panting.price}
          guantity={panting.guantity}
        />
      ))} */}
      {/* ПРИМЕР как рендерить 1 элемент */}
      {/* <Panting
        imgUrl={pantings[0].url}
        title={pantings[0].title}
        profileUrl={pantings[0].author.url}
        autor={pantings[0].author.tag}
        price={pantings[0].price}
        guantity={pantings[0].guantity}
      />
      <Panting
        imgUrl={pantings[1].url}
        title={pantings[1].title}
        profileUrl={pantings[1].author.url}
        autor={pantings[1].author.tag}
        price={pantings[1].price}
        guantity={pantings[1].guantity}
      />
      <Panting
        imgUrl={pantings[2].url}
        title={pantings[2].title}
        profileUrl={pantings[2].author.url}
        autor={pantings[2].author.tag}
        price={pantings[2].price}
        guantity={pantings[2].guantity}
      /> */}
      {/* goit-react-traning-1 */}
    </Container>
  );
};
