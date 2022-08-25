const Joi = require('joi');
const { userService } = require('../services');

const validateBody = (body) =>
  Joi.object({
    displayName: Joi.string().min(8).required().messages({
      'string.min': '"displayName" length must be at least 8 characters long',
    }),
    email: Joi.string().email().required().messages({
      'string.required': '"email" must be a valid email',
    }),
    password: Joi.string().min(6).required().messages({
      'string.min': '"password" length must be at least 6 characters long',
    }),
  }).validate(body);

// const { error } = validateBody(req.body);
// if (error) return next(error);

module.exports = async (req, res, next) => {
  const { error } = validateBody(req.body);
  if (error) return next(error);

  const users = await userService.getAllUsers();

  return res.status(200).json(users);
};
