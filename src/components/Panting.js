import defaultImg from '../default.jpg';

export default function Panting({
  imgUrl = defaultImg,
  title,
  profileUrl,
  autor = 'не известно',
  price,
}) {
  return (
    <div>
      <img src={imgUrl} alt={title} width="480" />
      <h2>{title}</h2>
      <p>
        Автор: <a href={profileUrl}>{autor}</a>
      </p>
      <p>Цена: {price} кредитов</p>
      <p>Доступность: В наличии или заканчивается</p>
      <button type="button"></button>
    </div>
  );
}
