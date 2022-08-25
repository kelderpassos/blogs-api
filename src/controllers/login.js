const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

module.exports = async (req, res) => {
    const payload = { email: req.body.email };

    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '1d' });
    return res.status(200).json({ token });
  };
