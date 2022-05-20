const Author = require('../services/Authors');
// get, post, put, delete devem ficar neste arquivo
// dentro routes entra somente a rota macro que movimenta todos os authors
const getAll = async (_req, res) => {
  const authors = await Author.getAll();
  res.status(200).json(authors);
}

const findById = async (req, res) => {
  const { id } = req.params;
  const author = await Author.findById(id);
  if (!author) return res.status(404).json({ message: 'Not found' });
  res.status(200).json(author);
}

const create = async (req, res) => {
  const { first_name, middle_name, last_name } = req.body;
  const author = await Author.createAuthor(first_name, middle_name, last_name);
  // if (!author) return res.status(400).json({ message: 'Dados inválidos' });
  if (author.message) return res.status(422).json({ message: author.message });
  res.status(201).json(author);
}

module.exports = {
  getAll,
  findById,
  create,
}