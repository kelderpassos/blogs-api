const { User } = require('../database/models');

module.exports = {
  getAllUsers: async () => {
    const allUsers = await User.findAll();
    const noPasswordResponse = allUsers.map(
      ({ id, displayName, email, image }) => ({
        id,
        displayName,
        email,
        image,
      }),
    );
    return noPasswordResponse;
  },
  createUser: async (info) => {
    const newUser = await User.create(info);
    return newUser;
  },
  getUserByEmail: async (userEmail) => {
    const users = await User.findOne({ where: { email: userEmail } });
    return users;
  },
  getUserById: async (userId) => {
    const userById = await User.findOne({ where: { id: userId } });

    if (!userById) return null;

    const noPasswordResponse = {
      id: userById.id,
      displayName: userById.displayName,
      email: userById.email,
      image: userById.image,
    };
    return noPasswordResponse;
  },
  deleteUserByToken: async (email) => User.destroy({ where: { email } }),
};
