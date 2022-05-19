const connection = require('./connection');

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

module.exports = {
	getAll,
};