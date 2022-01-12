const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  fetch(API_URL, myObject)
    .then((response) => response.json())
    // .then((data) => console.log(data.joke))
    .then((data) => document.getElementById('jokeContainer').innerText = data.joke)
    .catch((error) => console.log(`Algo deu errado :( \n${error}`));
};

/* async function fetchJoke() {  // ERRO
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  const result = await fetch(API_URL, myObject)
    const resposta = await ((response) => response.json());
    const dado = await ((data) => console.log(data.joke));
    const erro = await ((error) => console.log(`Algo deu errado :( \n${error}`));
}; */

window.onload = () => fetchJoke();
// retorno irá aparecer no console do browser. 
