module.exports = {
  verifyRequiredFields: async (req, res, next) => {
    const { email, password } = req.body;
    if (email.length === 0 || password.length === 0) {
      return res
        .status(400)
        .json({ message: 'Some required fields are missing' });
    }

    next();
  },
  verifyInvalidFields: async (req, res, next) => {
    const { email, password } = req.body;
    const validUser = email === 'lewishamilton@gmail.com' && password === '123456';
    if (!email || !password || !validUser) {
      return res.status(400).json({ message: 'Invalid fields' });
    }

    next();
  },
};

// (req, res, next) => {

//     if (email.length === 0 || password.length === 0) {
//       return res
//         .status(400)
//         .json({ message: 'Some required fields are missing' });
//     }

//     if (!email || !password || !validUser ) {
//       return res.status(400).json({ message: 'Invalid fields' });
//     }
// };
