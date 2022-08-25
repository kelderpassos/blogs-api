const { User } = require('../database/models');

module.exports = {
  getAllUsers: async () => {
    const users = await User.findAll();
    console.log(users);
    return users;
  },
};
