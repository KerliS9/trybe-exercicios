const express = require('express');
const routerAuthor = express.Router();

const Author = require('../controllers/Author');

/* const app = express();
app.use(express.json()); */

routerAuthor.get('/authors', Author.getAll);
routerAuthor.get('/authors/:id', Author.findById);
routerAuthor.post('/authors', Author.create);

module.exports = routerAuthor;
