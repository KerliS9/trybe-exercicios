// api.js
/* const fetch = require('node-fetch'); // usa se não abrir em html

const fetchCoins = () => {
  const url = 'https://api.coincap.io/v2/assets';

  const coins = fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data.id))
    .catch((error) => error.toString());

  console.log(coins);
}
fetchCoins(); */

// api.js
const fetchCoins2 = async () => {
  const url = 'https://api.coincap.io/v2/assets';

  const coins = await fetch(url)
    .then((response) => response.json())
    .then((data) => data.data)
    .catch((error) => error.toString());

  return coins;
}

const setCoins = async () => {
  const coins = await fetchCoins2();

  const coinsList = document.getElementById('coins-list');

  coins
    .filter((coin) => Number(coin.rank) <= 10)
    .forEach((coin) => {
      const newLi = document.createElement('li');
      // const usdPrice = Number(coin.priceUsd);
      // newLi.innerText = `${coin.name} (${coin.symbol}): ${usdPrice.toFixed(2)}`;
      newLi.innerText = `${coin.name} (${coin.symbol}): ${coin.priceUsd})}`;

      coinsList.appendChild(newLi);
    });
}

window.onload = () => setCoins();