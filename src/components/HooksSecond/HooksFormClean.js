import { useState, useEffect } from 'react';

// КАСТОМНЫЙ ХУК выносим в отдельную локальную функцию общуюю логику для многих случаев
const useLocalStorage = (key, defaultValue) => {
  const [state, setState] = useState(() => {
    return JSON.parse(window.localStorage.getItem(key)) ?? defaultValue;
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
};

// обьявляем эту функцию и передаем туда значения
export default function SignupFormClean() {
  const [email, setEmail] = useLocalStorage('email', '');
  const [password, setPassword] = useLocalStorage('password', '');

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
  };

  // ЭТИ УЖЕ НЕ НАДО ================================
  // записываем данные в ЛОКАЛ-СТОРЕДЖ при изменении значения email (пр этом email переводим в строку)
  //   useEffect(() => {
  //     window.localStorage.setItem('email', JSON.stringify(email));
  //   }, [email]);

  //   useEffect(() => {
  //     window.localStorage.setItem('password', JSON.stringify(password));
  //   }, [password]);

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
