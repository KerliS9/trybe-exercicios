const express = require('express');
const routeAuthor = express.Router();

const Author = require('../models/Author');
const Book = require('../models/Book');


routeAuthor.get('/authors', async (_req, res) => {
	const authors = await Author.getAll();

	res.status(200).json(authors);
});

routeAuthor.get('/books', async (_req, res) => {
	const books = await Book.getAll();

	res.status(200).json(books);
});

routeAuthor.get('/books/:id', async (req, res) => {
	// const { id } = req.query;
	console.log('req', req);
	const books = await Book.getAll();

	res.status(200).json(books);
});

module.exports = routeAuthor;