import React from 'react';
import { nanoid } from 'nanoid';
// импорт масива данных для разметки (для пропсов)
import pantings from '../../Json/pantings.json';
import recipes from '../../Json/recipes.json';
import colorPickerOptions from '../../Json/colorPicker.json';
// import todos from '../../Json/todolist.json';
// импорт ЕМОШИОН стилизация
import { Container, Markup, Title } from './App.styled';
// для иконок
import { FaBeer } from 'react-icons/fa';
import { AiFillAudio } from 'react-icons/ai';
// импорт функции разметки
import PantingsList from '../Panting/PantingsList';
import Section from '../Section';
import ToDoIconsList from '../ToDoIcons/ToDoIconsList';
import Counter from '../Counter/Counter';
import Dropdown from '../Dropdown';
import ColorPicker from '../ColorPicker';
import ToDoList from '../ToDoList';
import FormInput from '../FormInput';
import Contacts from '../FormInput/Contacts';

// =============================

// =============================

export class App extends React.Component {
  state = {
    contacts: [],
    name: '',
    // experience: ' ',
  };

  formSubmitHandler = data => {
    const { name } = data;
    this.addContacts(name);
  };

  addContacts = name => {
    const contact = {
      id: nanoid(),
      name,
    };
    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };
  render() {
    return (
      <Container>
        {/* форма INPUT ====================== */}
        <Section>
          <Markup>
            <Title>Phonebook</Title>
            <FormInput
              contacts={this.state.contacts}
              onSubmitData={this.formSubmitHandler}
            />
            <Title>Contacts</Title>
            <Contacts contacts={this.state.contacts} />
          </Markup>
          {/* ================================= */}
        </Section>
        <Section title="To Do List">
          <ToDoList />
        </Section>
        <Section>
          <ColorPicker options={colorPickerOptions} />
          <Dropdown />
        </Section>
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
          <Counter initialValue={10} />
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
  }
}
