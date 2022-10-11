import React from 'react';

class Reader extends React.Component {
  state = {};

  render() {
    return (
      <div>
        <section>
          <button type="button">Назад</button>
          <button type="button">Вперед</button>
        </section>
        <p>1/10</p>
        <article>
          <h2>qqqqqq</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis
            dicta perspiciatis cupiditate velit sunt eos in maiores! Natus,
            reiciendis animi accusantium ipsum incidunt in quod dolorem tenetur
            possimus, eum voluptas?
          </p>
        </article>
      </div>
    );
  }
}

export default Reader;
