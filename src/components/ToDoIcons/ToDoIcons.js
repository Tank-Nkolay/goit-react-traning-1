// import PropTypes from 'prop-types';

export default function ToDoIcons({
  recipe: { name, time, servings, calories },
}) {
  return (
    <article>
      <h2>{name}</h2>
      <div>
        <div>
          <span>Icon</span>
          <p>{time} min</p>
        </div>
        <div>
          <span>Icon</span>
          <p>{servings} servings</p>
        </div>
        <div>
          <span>Icon</span>
          <p>{calories} calories</p>
        </div>
      </div>
    </article>
  );
}
