const express = require('express');

const { Book, Client } = require('../src/models');
const routerClientBook = express.Router();
// ...
routerClientBook.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const user = await Client.findOne({
      where: { userId: id },
      include: [{ model: Book, as: 'books', through: { attributes: [] } }], // com o through oculta a relação entre as tabelas
    });

    if (!user)
      return res.status(404).json({ message: 'Usuário não encontrado' });

    return res.status(200).json(user);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  };
});

module.exports = routerClientBook;