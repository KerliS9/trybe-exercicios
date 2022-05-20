const { connection } = require('./connection');
const Author = require('./Author');

// Converte o nome dos campos de snake_case para camelCase
const serialize = (bookData) => ({
	authorId: bookData.author_id,
	title: bookData.title});

// Busca todas as pessoas autoras do banco.
const getAll = async () => {
	const [books] = await connection.execute(
		'SELECT author_id, title FROM model_example.books;',
	);
	return books.map(serialize);
};

const getByAuthorId = async (id) => {
	const [books] = await connection.execute(
		'SELECT author_id, title FROM model_example.books WHERE author_id = ?;', [id],
	);
  if (books.length === 0) return null;
	return books.map(serialize);
};

const isValidDataBook = async (title, authorId) => {
	if (!title || title.length < 3) return false;
	if (!authorId || typeof authorId !== 'number' || !(await Author.getAuthorById(authorId))) return false;

	return true;
};

const createBook = async (title, author_id) => await connection.execute(
	'INSERT INTO model_example.books (title, author_id) VALUES (?,?)',
	[title, author_id],
);

module.exports = {
	getAll,
  getByAuthorId,
  isValidDataBook,
  createBook,
};