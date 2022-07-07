import Joi from 'joi';

export default {
  user: Joi.object().keys({
    name: Joi.string().min(3).required(),
    email: Joi.string().email({ minDomainSegments: 2}).required(),
    password: Joi.string().min(8).max(12).required(),
  })
}