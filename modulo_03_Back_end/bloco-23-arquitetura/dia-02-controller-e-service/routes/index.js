const express = require('express');
const routerAuthor = express.Router();
const rescue = require('express-rescue');
const Author = require('../controllers/AuthorController');
const errorhandler = require('../middlewares/errorHandler');

/* const app = express();
app.use(express.json()); */

routerAuthor.get('/authors', Author.getAll);
routerAuthor.get('/authors/:id', Author.findById);
routerAuthor.post('/authors', Author.createAuthor);


module.exports = routerAuthor;
