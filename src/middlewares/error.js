module.exports = (err, _req, res, _next) => {
  if (!err.message.includes('|')) {
    return res.status(500).json(err.message);
  }
  const [code, message] = err.message.split('|');
  return res.status(code).json({ message });
};
