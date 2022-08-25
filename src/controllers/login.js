const Joi = require('joi');
const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

const validateBody = (body) =>
  Joi.object({
    email: Joi.string()
      .required()
      .messages({ 'string.required': 'Some required fields are missing' }),
    password: Joi.string()
      .required()
      .messages({ 'string.required': 'Some required fields are missing' }),
  }).validate(body);

module.exports = async (req, res, _next) => {
    // const { error } = validateBody(req.body);
    // if (error) return next(error);

    const { email, password } = req.body;
    // const validUser = email === 'lewishamilton@gmail.com' && password === '123456';

    if (!email || !password) {
      return res.status(400).json({ message: 'Invalid fields' });
    }

    if (email.length === 0 || password.length === 0) {
      return res
        .status(400)
        .json({ message: 'Some required fields are missing' });
    }

    const payload = { email: req.body.email };

    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '1d' });
    return res.status(200).json({ token });
  };
