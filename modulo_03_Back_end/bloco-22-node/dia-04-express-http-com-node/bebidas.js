const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());
// funcionar neste arquivo precisa rodar node bebidas.js

const drinks = [
	{ id: 1, name: 'Refrigerante Lata', price: 5.0 },
	{ id: 2, name: 'Refrigerante 600ml', price: 8.0 },
	{ id: 3, name: 'Suco 300ml', price: 4.0 },
	{ id: 4, name: 'Suco 1l', price: 10.0 },
	{ id: 5, name: 'Cerveja Lata', price: 4.5 },
	{ id: 6, name: 'Água Mineral 500 ml', price: 5.0 },
];

app.get('/drinks', function (req, res) {
  res.json(drinks);
});

/* app.get('/drinks/:id', function (req, res) {
  const { id } = req.params;
  const drink = drinks.find((r) => r.id === parseInt(id));

  if (!drink) return res.status(404).json({ message: 'Recipe not found!'});

  res.status(200).json(drink);
}); */
/* Quando houver rotas com um mesmo radical e uma delas utilizar parâmetro de rota, as rotas mais específicas sempre devem ser definidas antes. Isso porque, ao resolver uma rota, o Express verifica rota por rota qual corresponde à URL que chegou. Se a rota for /recipes/search depois da rota /recipes/:id, o Express vai entender a palavra search como um id e vai chamar a callback da rota /recipes/:id. Tenha atenção a esse detalhe ao utilizar rotas similares na definição da sua API. */

// formato da url /drinks/search?name=Suco
app.listen(3002, () => {
  console.log('Aplicação ouvindo na porta 3002');
});

app.get('/drinks/search', function (req, res) {
  const { name } = req.query;
  const filteredDrinks = drinks.filter((r) => r.name.includes(name));
  res.status(200).json(filteredDrinks);
});

// nome e preço mínimo do prato
  // /drinks/search?name=Suco&minPrice=3
  app.get('/drinks/search', function (req, res) {
    const { name, minPrice } = req.query;
    const filteredDrinks = drinks.filter((r) => r.name.includes(name) && r.price < parseInt(minPrice));
    res.status(200).json(filteredDrinks);
  })