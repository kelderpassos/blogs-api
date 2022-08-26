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

module.exports = {
  createNewUser: async (req, res) => {
    const { displayName, email, password, image } = req.body;

    const { error } = validateBody(req.body);
    if (error) throw error;

    const existingUser = await userService.getUserByEmail(email);
    if (existingUser) throw new Error('409|User already registered');

    await userService.createUser({ displayName, email, password, image });

    const payload = { displayName, email, image };
    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '1d' });

    return res.status(201).json({ token });
  },
  getAllUsers: async (req, res) => {
    const allUsers = await userService.getAllUsers();
    const noPasswordResponse = allUsers.map(({ id, displayName, email, image }) => ({
      id, displayName, email, image,
    }));
    return res.status(200).json(noPasswordResponse);
  },
};

// const user = { id, displayName, email, image };
//       return user;
