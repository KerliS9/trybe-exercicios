const express = require('express');
const app = express();
const cors = require('cors');

const { getSimpsons, setSimpsons } = require('./funcSimps');

app.use(cors());
app.use(express.json());

// exercicio 6
app.get('/simpsons', async function (req, res) {
  const anime = await getSimpsons();
  // console.log(anime);
  if (anime.length > 0) return res.status(200).json(anime);
  return res.status(500).json({ "message": "Erro"});
});

app.listen(3004, () => {
  console.log('Aplicação ouvindo na porta 3004');
});

// exercicio 7
app.get('/simpsons/:id', async function (req, res) {
  try {
    const simpsons = await getSimpsons();
    const { id } = req.params;
    const simpsonId = simpsons.find(({ id }) => id === id);
    // console.log(simpsonId);
    if (simpsonId) return res.status(200).json(simpsonId);
    return res.status(404).json({ message: 'simpson not found' });
  } catch(err) {
    return res.status(500).json({ "message": "Erro"});
  }
});

// exercicio 8
app.post('/simpsons', async function (req, res) {
  const simpsons = await getSimpsons();
  const { id, name } = req.body;
  // const simpsonId = simpsons.map(( { id }) => id).includes(id);
  // console.log(simpsonId);
  // if (simpsonId) return res.status(409).json({ message: 'id already exists' });
  if (simpsons.map(( { id }) => id).includes(id)) return res.status(409).json({ message: 'id already exists' });
  simpsons.push({ id, name });
  await setSimpsons(simpsons);
  return res.status(204).json({ "message": "Inserido com sucesso"});
});