const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

module.exports = async (req, _res, next) => {
  const token = req.headers.authorization;
  if (!token) throw new Error('401|Token not found');

  // const payload = jwt.verify(token, JWT_SECRET);
  // if (!payload) throw new Error('401|Expired or invalid token');
  // req.user = payload;
  // return next();
  try {
    const payload = jwt.verify(token, JWT_SECRET);
    req.user = payload;
    return next();
  } catch (error) {
    error.message = '401|Expired or invalid token';
    throw error;
  }
};
