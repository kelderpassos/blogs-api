module.exports = (err, _req, res, _next) => {
  const [code, message] = err.message.split('|');
  return res.status(code).json({ message });
};
