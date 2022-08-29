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
    return res.status(200).json(allUsers);
  },
  getUserById: async (req, res) => {
    const { id } = req.params;
    const userById = await userService.getUserById(id);
    
    if (!userById) throw new Error('404|User does not exist');

    // try {
    // } catch (error) {
    //   error.message = '404|User does not exist';
    //   return error;
    // }
    
    return res.status(200).json(userById);
  },
  deleteUserByToken: async (req, res) => {
    const { authorization } = req.headers;

    const decodedToken = jwt.verify(authorization, JWT_SECRET);
    await userService.deleteUserByToken(decodedToken.email);

    return res.status(204).end();
  },
};