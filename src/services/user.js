const { User } = require('../database/models');

module.exports = {
  getAllUsers: async () => {
    const users = await User.findAll();
    return users;
  },
  createUser: async (info) => {
    const newUser = await User.create(info);
    return newUser;
  },
  getUserByEmail: async (userEmail) => {
    const users = await User.findOne({ where: { email: userEmail } });
    return users;
  },
};
