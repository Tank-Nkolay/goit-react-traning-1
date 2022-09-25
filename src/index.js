import React from 'react';
import ReactDOM from 'react-dom/client';
// обязательно для ШАБЛОНЫ и потом обертка ThemeProvider
import { ThemeProvider } from '@emotion/react';
import { App } from 'components/App/App';
import './index.css';
// импорт константы цветов и потом обертка (доступно на ПРОПС)
import { theme } from './Constans/theme';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

//  ПРИМЕР РЕНДЕРА ===============================================

// ReactDOM.render(<App />, document.querySelector('#root'));
//  ===============================================

//  ПРИМЕР СТАРТОВОЙ РАЗМЕТКИ ===============================================

// const data = {
//   id: 'id-1',
//   url: 'https://pixabay.com/ru/photos/%d1%86%d0%b2%d0%b5%d1%82%d0%be%d0%ba-%d0%b1%d0%be%d1%82%d0%b0%d0%bd%d0%b8%d0%ba%d0%b0-%d0%b1%d0%bb%d1%83%d0%bc-%d1%86%d0%b2%d0%b5%d1%81%d1%82%d0%b8-%d0%bb%d0%b8%d0%bb%d0%b8-7414318/',
//   title: 'Art abstract',
//   price: 500,
//   author: {
//     tag: 'mamama',
//     url: 'https://pixabay.com/ru/',
//   },
//   guantity: 10,
// };

// const panting = (
//   <div>
//     <img src={data.url} alt={data.title} width="480" />
//     <h2>{data.title}</h2>
//     <p>
//       Автор: <a href={data.author.url}>{data.author.tag}</a>
//     </p>
//     <p>Цена: {data.price} кредитов</p>
//     <p>Доступеость: В наличии или заканчивается</p>
//     <button type="button"></button>
//   </div>
// );

// ReactDOM.render(panting, document.querySelector('#root'));

//  ПРИМЕР ===============================================
