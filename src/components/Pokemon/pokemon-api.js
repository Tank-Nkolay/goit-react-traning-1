function fetchPokemon(name) {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${name}`).then(response => {
    if (response.ok) {
      return response.json();
    }
    //   так мы обрабатываем 404 ошибку
    return Promise.reject(new Error(`Нет покемона с именем ${name}`));
  });
}
const api = { fetchPokemon };
export default api;
