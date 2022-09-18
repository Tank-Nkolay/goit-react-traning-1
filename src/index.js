import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const elem1 = <span>Привет</span>;
const elem2 = <span>Мир</span>;

const element = (
  <div>
    {elem1}
    {elem2}
  </div>
);

console.log(element);
