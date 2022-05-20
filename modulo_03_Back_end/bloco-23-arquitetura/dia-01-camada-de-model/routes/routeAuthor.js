const express = require('express');
const routeAuthor = express.Router();

const Author = require('../models/Author');
const Book = require('../models/Book');

// authors
routeAuthor.get('/authors', async (_req, res) => {
	const authors = await Author.getAll();

	res.status(200).json(authors);
});

routeAuthor.get('/authors/:id', async (req, res) => {
	const { id } = req.params;
	const author = await Author.getAuthorById(id);
	if (!author) return res.status(404).json({ message: 'Not found' });

	res.status(200).json(author);
});

routeAuthor.post('/authors', async (req, res) => {
	const { first_name, middle_name, last_name } = req.body;
	// console.log(req.body);
	if (!Author.isValidDataAuthor(first_name, middle_name, last_name)) {
		return res.status(400).json({ message: 'Dados inválidos' });
	}

	await Author.createAuthor(first_name, middle_name, last_name);

	res.status(201).json({ message: 'Autor criado com sucesso! '});
});

// books
routeAuthor.get('/books', async (_req, res) => {
	const books = await Book.getAll();

	res.status(200).json(books);
});

routeAuthor.get('/books/:id', async (req, res) => {
	const { id } = req.params;
	const books = await Book.getByAuthorId(id);

	if (!books) return res.status(404).json({ message: 'Not found' });

	res.status(200).json(books);
});

routeAuthor.post('/books', async (req, res) => {
	const { title, author_id } = req.body;
	// console.log(req.body);
	if (!Book.isValidDataBook(title, author_id)) {
		return res.status(400).json({ message: 'Dados inválidos' });
	}

	await Book.createBook(title, author_id);

	res.status(201).json({ message: 'Livro criado com sucesso! '});
});

module.exports = routeAuthor;