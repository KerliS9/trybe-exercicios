// const connectionUser = require('./connection');
const { connectionUser } = require('./connection');

const isUserDataValid = (firstName, lastName, email, password) => {
	if (!firstName || typeof firstName !== 'string') return false;
	if (!lastName || typeof lastName !== 'string') return false;
	if (!email || typeof email !== 'string') return false;
  if (!password || typeof password !== 'string' || password.length < 6) return false;

	return true;
};

const createUser = async (firstName, lastName, email, password) => await connectionUser.execute(
	'INSERT INTO users_crud.users (first_name, last_name, email, password) VALUES (?,?,?,?)',
	[firstName, lastName, email, password],
);

const serialize = (userData) => ({
	id: userData.id,
	firstName: userData.first_name,
	lastName: userData.last_name,
  email: userData.email,
	password: userData.password});

// Busca todas as pessoas autoras do banco.
const getAllUsers = async () => {
	const [rows] = await connectionUser.execute(
		'SELECT id, first_name, last_name, email, password FROM users_crud.users;',
	);
	return rows.map(serialize);
};

const getUserById = async (id) => {
	const query = 'SELECT id, first_name, last_name, email, password FROM users_crud.users WHERE id = ?;'
	const [rows] = await connectionUser.execute( query, [id]);
	return rows.map(serialize);
};

module.exports = {
  isUserDataValid,
  createUser,
  getAllUsers,
	getUserById
};