const express = require('express');
const { object } = require('joi');
const routeUser = express.Router();

const User = require('../models/User');
const { validateDataToCreateUser, handleError } = require('../middlewares');


routeUser.post('/user', async (req, res, next) => {
	try {
		/* const { firstName, lastName, email, password } = req.body; */
		const result = await validateDataToCreateUser.validateAsync(req.body);
		console.log(result);
		const newUser = await User.createUser(result);

		return res.status(201).json(newUser);
	} catch (error) {
		const er = await handleError();
		console.log(er);
		// next(error);
	}
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