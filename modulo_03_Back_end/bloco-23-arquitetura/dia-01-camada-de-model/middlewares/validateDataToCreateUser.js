// const User = require('../models/User');
const Joi = require('joi');

const validateDataToCreateUser = Joi.object({
	firstName: Joi.string().required(),
	lastName: Joi.string().required(),
	email: Joi.string().email().required(),
	password: Joi.string().min(6).required()});

	module.exports = {
		validateDataToCreateUser
	}

	// validateDataToCreateUser.validate(User.createUser);
	/* .messages({
	'any.required': `O campo {
{: id="label" }} é obrigatório',
	'string.min': 'O campo {
{: id="label" }} deve ter, pelo menos, {
{: id="limit" }} caracteres',
	'string.email': 'Informe um email válido no campo {
{: id="label" }}`}); */

/* module.exports = {
	firstName: Joi.string().required(),
	lastName: Joi.string().required(),
	email: Joi.string().email().required(),
	password: Joi.string().min(6).required()
}; */