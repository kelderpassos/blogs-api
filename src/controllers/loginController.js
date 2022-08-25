const Joi = require('joi');
// const jwt = require('jsonwebtoken');

const validateBody = (body) =>
  Joi.object({
    email: Joi.string()
      .required()
      .messages({ 'string.required': 'Some required fields are missing' }),
    password: Joi.string()
      .required()
      .messages({ 'string.required': 'Some required fields are missing' }),
  }).validate(body);

module.exports = {
  login: async (req, res, next) => {
    const { error } = validateBody(req.body);

    if (error) return next(error);

    // const { email, password } = req.body;
  },
};
