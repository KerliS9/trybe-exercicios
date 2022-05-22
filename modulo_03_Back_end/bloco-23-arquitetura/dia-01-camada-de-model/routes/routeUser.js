const express = require('express');
const Joi = require('joi');
const routeUser = express.Router();

const User = require('../models/User');
// const { validateDataToCreateUser, handleError } = require('../middlewares');


routeUser.post('/user', async (req, res, next) => {
	// try {
		/* const { firstName, lastName, email, password } = req.body; */
		/* const result = await validateDataToCreateUser.validate(req.body) //.validateAsync(req.body);
		console.log(result);
		if (result.error) return result.error; */

		const {
			first_name: firstName,
			last_name: lastName,
			email,
			password,
		} = req.body;

		console.log(req.body);

		const { error } = Joi.object({
			firstName: Joi.string().required(),
			lastName: Joi.string().required(),
			email: Joi.string().email().required(),
			password: Joi.string().min(6).required()}).validate({ firstName, lastName, email, password })

			if (error) {
				return next(error);
			}

		const newUser = await User.createUser({ firstName, lastName, email, password });
		// const newAuthor = await Author.createAuthor(firstName, middleName, lastName);
		if (newUser.error) return next(newUser.error);
		return res.status(201).json(newUser);
	
});


routeUser.get('/user', async (_req, res) => {
  const users = await User.getAllUsers();

	res.status(200).json(users);
})

routeUser.get('/user/:id', async (req, res) => {
	const { id } = req.params;
  const userById = await User.getUserById(id);

	res.status(200).json(userById);
})

module.exports = routeUser;

/* const Joi = require('joi');
	console.log(Joi);
	const data = req.body;
	const validateDataToCreateUser = Joi.object().keys({
		firstName: Joi.string().required(),
		lastName: Joi.string().required(),
		email: Joi.string().email().required(),
		password: Joi.string().min(6).required(),
	})
	
		Joi.validate(validateDataToCreateUser, data, (err, value) =>{
			if(err) {
				res.status(400).json({
					status: 'error',
					message: 'Invalid data',
					data: data
				});
			} else {
				res.json({
					status: 'success',
					message:'user created',
					data: Object.assign(value)
				})
			} */