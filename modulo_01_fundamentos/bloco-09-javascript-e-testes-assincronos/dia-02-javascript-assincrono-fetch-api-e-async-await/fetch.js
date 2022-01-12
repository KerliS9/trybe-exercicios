/* const fetch = require('node-fetch');

const fetchJoke = () => {
  const url = 'https://api.chucknorris.io/jokes/random?category=dev';

  console.log(fetch(url));
}

fetchJoke(); */
// Ao rodar esse código você vai perceber que no console foi impresso Promise { <pending> } ao invés da piada. Como foi explicado no tópico de Promises, se o fluxo assíncrono não for controlado, ela vai retornar o seu estado e não o dado requisitado

const fetch = require('node-fetch');

const fetchJoke = () => {
  const url = 'https://api.chucknorris.io/jokes/random?category=dev';

  fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data.value));
}

fetchJoke();
// Ao rodar o código acima recebemos um elogio sobre o Chuck Norris em nosso console

// const fetch = require('node-fetch');

const fetchJoke2 = () => {
  const url = 'api.chucknorris.io/jokes/random?category=dev';

  fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data.value))
    .catch((error) => console.log(`Algo deu errado :( \n${error}`));
}

fetchJoke2();

// Algo deu errado :( 
// TypeError: Only absolute URLs are supported
// Assim como o .then() recebe o retorno caso a requisição seja bem sucedida, o .catch() recebe o erro gerado caso a requisição não seja bem sucedida, que é passado para ele como argumento de sua função interna. 