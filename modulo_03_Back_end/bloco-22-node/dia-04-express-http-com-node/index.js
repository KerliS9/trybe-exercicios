/* const express = require('express');

const app = express(); // 1

app.get('/hello', handleHelloWorldRequest); // 2 - busca as informações do usuário 

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
}); // 3

function handleHelloWorldRequest(req, res) {
  res.status(200).send('Hello World! Com Nodemon'); // 4 - neste exemplo foi enviado por esta função
} */

/* index.js */
const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

const recipes = [
  { id: 1, name: 'Lasanha', price: 40.0, waitTime: 30 },
  { id: 2, name: 'Macarrão a Bolonhesa', price: 35.0, waitTime: 25 },
  { id: 3, name: 'Macarrão com molho branco', price: 35.0, waitTime: 25 },
];

app.get('/recipes', function (req, res) {
  res.json(recipes);
});

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});


// formato da url /recipes/search?name=Macarrão
  app.get('/recipes/search', function (req, res) {
    const { name } = req.query;
    const filteredRecipes = recipes.filter((r) => r.name.includes(name));
    res.status(200).json(filteredRecipes);
  });

  // nome e preço máximo do prato
  // /recipes/search?name=Macarrão&maxPrice=40
app.get('/recipes/search', function (req, res) {
	const { name, maxPrice } = req.query;
	const filteredRecipes = recipes.filter((r) => r.name.includes(name) && r.price < parseInt(maxPrice));
	res.status(200).json(filteredRecipes);
})

// inserir recipes no json
app.post('/recipes', function (req, res) {
  const { id, name, price, waitTime } = req.body;
  recipes.push({ id, name, price, waitTime });
  res.status(201).json({ message: 'Recipe created successfully!'});
});

// ...TOKEN???
app.get('/validateToken', function (req, res) {
  const token = req.headers.authorization;
  console.log(token);
  if (token.length !== 16) return res.status(401).json({message: 'Invalid Token!'});

  res.status(200).json({message: 'Valid Token!'});
});


// Put - Alterar dado conforme o id buscado
app.put('/recipes/:id', function (req, res) {
  const { id } = req.params;
  const { name, price } = req.body;
  const recipeIndex = recipes.findIndex((r) => r.id === parseInt(id));

  if (recipeIndex === -1) return res.status(404).json({ message: 'Recipe not found!' });

  recipes[recipeIndex] = { ...recipes[recipeIndex], name, price };

  res.status(204).end();
});

// Deletar item da lista
app.delete('/recipes/:id', function (req, res) {
  const { id } = req.params;
  const recipeIndex = recipes.findIndex((r) => r.id === parseInt(id));

  if (recipeIndex === -1) return res.status(404).json({ message: 'Recipe not found!' });

  recipes.splice(recipeIndex, 1);

  res.status(204).end();
});

// rota não mapeada
// cuidar no uso generalista da rota, pois se houver uma rota /teste abaixo deste rota, ela não será lida
app.all('*', function (req, res) {
	return res.status(404).json({ message: `Rota '${req.path}' não existe!`});
});
