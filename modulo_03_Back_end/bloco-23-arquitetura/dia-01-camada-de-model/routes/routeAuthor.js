const express = require('express');
const routeAuthor = express.Router();

const Author = require('../models/Author');

routeAuthor.get('/authors', async (_req, res) => {
	const authors = await Author.getAll();

	res.status(200).json(authors);
});

module.exports = routeAuthor;