import React from 'react';
import { nanoid } from 'nanoid';
// импорт масива данных для разметки (для пропсов)
import pantings from '../../Json/pantings.json';
import recipes from '../../Json/recipes.json';
import colorPickerOptions from '../../Json/colorPicker.json';
import tab from '../../Json/tabs.json';
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
import Http from '../Http/Http';
import Modal from '../Modal';
import Clock from '../Clock';
import Tabs from '../Tabs';
import IconButton from '../IconButton';
import Reader from '../Reader';
// импорт иконки svg
import { ReactComponent as AddIcon } from '../../icons/add.svg';

// =============================

// =============================

export class App extends React.Component {
  state = {
    contacts: [],
    name: '',
    experience: ' ',
    showModal: false,
    showClock: false,
    todos: [],
  };

  togleModal = () => {
    this.setState(state => ({
      showModal: !state.showModal,
    }));
  };

  togleClock = () => {
    this.setState(state => ({
      showClock: !state.showClock,
    }));
  };

  formSubmitHandler = data => {
    const { name, experience } = data;
    this.addContacts(name);
    this.addContacts(experience);
  };

  addContacts = (name, experience) => {
    const contact = {
      id: nanoid(),
      name,
      experience,
    };
    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };

  addTodo = text => {
    const todo = {
      id: nanoid(),
      text,
      completed: false,
    };
    this.setState(({ todos }) => ({
      todos: [todo, ...todos],
    }));
  };

  render() {
    const { showModal, showClock } = this.state;
    return (
      <Container>
        <Section title="Reader">
          <Reader />
        </Section>
        <Section title="To Do List">
          <ToDoList />
        </Section>
        <Section title="IconButton">
          <IconButton onClick={this.togleModal} aria-label="Добавить">
            <AddIcon width="40" height="40" fill="white" />
          </IconButton>
        </Section>
        <Section title="Tabs">
          <Tabs items={tab} />
        </Section>
        <Section title="Clock">
          <button type="button" onClick={this.togleClock}>
            Открыть / Закрыть таймер
          </button>
          {showClock && <Clock />}
        </Section>

        <Section title="Modal">
          <button type="button" onClick={this.togleModal}>
            Открыть модалку
          </button>
          {showModal && (
            <Modal onClose={this.togleModal}>
              <h1>Hello!</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                nobis omnis excepturi, at non neque dolorum molestias ipsam
                aliquam laudantium dolor laborum expedita reprehenderit ducimus
                facilis aliquid nemo quia fugit!
              </p>
              <button type="button" onClick={this.togleModal}>
                Закрыть модалку
              </button>
            </Modal>
          )}
        </Section>

        <Section title="HTTP-запросы">
          <Http />
        </Section>
        {/* форма INPUT ====================== */}
        {/* пока работает не корректно */}
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
