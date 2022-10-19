import { useState } from 'react';
// import { Container } from './Hooks.styled';

export default function SignupForm() {
  // передаем начальное значение
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // функция - что должен сделать setEmail - записать текущее значение в email
  const handleChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'email':
        setEmail(value);
        break;

      case 'password':
        setPassword(value);
        break;

      default:
        return;
    }
    // switch (event.target.name) {
    //   case 'email':
    //     setEmail(event.target.value);
    //     break;

    //   case 'password':
    //     setPassword(event.target.value);
    //     break;

    //   default:
    //     return;
    // }
  };

  return (
    <form autoComplete="off">
      <label>
        <span>Почта</span>
        <input
          type="email"
          name="email"
          onChange={handleChange}
          value={email}
        />
      </label>

      <label>
        <span>Пароль</span>
        <input
          type="password"
          name="password"
          onChange={handleChange}
          value={password}
        />
      </label>

      <button type="submit">Зарегистрироваться</button>
    </form>
  );
}

// =====================================================
// старый вариант на классах
// =====================================================
// export default class SignupForm extends Component {
//   state = {
//     email: '',
//     password: '',
//   };

//   handleChange = evt => {
//     const { name, value } = evt.target;
//     this.setState({ [name]: value });
//   };

//   render() {
//     return (
//       <form autoComplete="off">
//         <label>
//           <span>Почта</span>
//           <input
//             type="email"
//             name="email"
//             onChange={this.handleChange}
//             value={this.state.email}
//           />
//         </label>

//         <label>
//           <span>Пароль</span>
//           <input
//             type="password"
//             name="password"
//             onChange={this.handleChange}
//             value={this.state.password}
//           />
//         </label>

//         <button type="submit">Зарегистрироваться</button>
//       </form>
//     );
//   }
// }
// =====================================================
