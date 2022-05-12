const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.get('/ping', function (req, res) {
  console.log({ message: 'pong' });
  res.status(200).json({ message: 'retornada'})
});

/* app.listen(3003, () => {
  console.log('Aplicação ouvindo na porta 3003');
}); */

// exercicio 2
app.get('/hello', function (req, res) {
  res.status(200).json({ message: 'rota criada'})
});

app.post('/hello', function (req, res) {
  const { name } = req.body;
  res.status(201).json({ "message": `Hello, ${name}!` });
});

app.listen(3003, () => {
  console.log('Aplicação ouvindo na porta 3003');
});

// exercicio 3
app.post('/greetings', function (req, res) {
  const { name, age } = req.body;
  if (age > 17) res.status(200).json({ "message": `Hello, ${name}!` })
  res.status(401).json({ "message": "Unauthorized" });
});

// exercicio 4
app.post('/users', function (req, res) {
  const { name, age } = req.body;
  res.status(200).json({ "message": `Seu nome é ${name} e você tem ${age} anos de idade!` });
});