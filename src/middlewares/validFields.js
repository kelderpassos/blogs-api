const { userService } = require('../services');

module.exports = {
  verifyInvalidFields: async (req, res, next) => {
    const { email } = req.body;   

    const existingUser = await userService.getUserByEmail(email);
    if (!existingUser) throw new Error('400|Invalid fields');

    next();
  },
  verifyRequiredFields: async (req, res, next) => {
    const { email, password } = req.body;
    if (email.length === 0 || password.length === 0) {
      return res
        .status(400)
        .json({ message: 'Some required fields are missing' });
    }

    next();
  },
};
