module.exports = (err, _req, res, _next) => {
  if (err.isJoi) {
    console.log(err.details[0], 'log');
    return res.status(400).json({ message: 'Some required fields are missing' });
  }
};
