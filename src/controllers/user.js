const Joi = require('joi');
const jwt = require('jsonwebtoken');
const { userService } = require('../services');

const { JWT_SECRET } = process.env;

const validateBody = (body) =>
  Joi.object({
    displayName: Joi.string().min(8).required().messages({
      'string.min':
        '400|"displayName" length must be at least 8 characters long',
    }),
    email: Joi.string().email().required().messages({
      'string.email': '400|"email" must be a valid email',
    }),
    password: Joi.string().min(6).required().messages({
      'string.min': '400|"password" length must be at least 6 characters long',
    }),
    image: Joi.string().allow(),
  }).validate(body);

module.exports = async (req, res) => {
  const { error } = validateBody(req.body);

  if (error) throw error;

  const { displayName, email, password, image } = req.body;

  const existingUser = await userService.getUserByEmail(email);

  if (existingUser) {
    return res.status(409).json({ message: 'User already registered' });
  }

  await userService.createUser({ displayName, email, password, image });

  const payload = { displayName, email, image };
  const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '1d' });

  return res.status(201).json({ token });
};
