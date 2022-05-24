const express = require('express');

const MovieController = require('./controllers/moviesController');

const app = express();

app.use(express.json());

app.post('/movies', MovieController.create);
app.get('/movies', (req, res) => {
  return res.status(200).json('ok');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});