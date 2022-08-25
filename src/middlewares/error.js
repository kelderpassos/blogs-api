module.exports = (err, _req, res, _next) => {
  console.log(err, 'caí aqui ');
  if (err.isJoi) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }
};
