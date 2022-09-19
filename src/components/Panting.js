export default function Panting({ url, title, profileUrl, autor, price }) {
  return (
    <div>
      <img src={url} alt={title} width="480" />
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
