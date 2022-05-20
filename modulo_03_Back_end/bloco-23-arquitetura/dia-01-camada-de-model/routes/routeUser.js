const express = require('express');
const routeUser = express.Router();

const User = require('../models/User');

routeUser.post('/user', async (req, res) => {
	const { firstName, lastName, email, password } = req.body;
	// console.log(req.body);
	/* if (!User.isUserDataValid(firstName, lastName, email, password)) {
		return res.status(400).json({ message: 'O campo password deve ter pelo menos 6 caracteres' });
	} */
  if (!User.isUserDataValid(firstName, lastName, email, password)) {
		return res.status(400).json({ message: 'O campo {{#label}} é obrigatório' });
	}

	const newUser = await User.createUser(firstName, lastName, email, password);

	res.status(201).json(newUser);
});

routeUser.get('/user', async (_req, res) => {
  const users = await User.getAllUsers();

	res.status(200).json(users);
})

module.exports = routeUser;