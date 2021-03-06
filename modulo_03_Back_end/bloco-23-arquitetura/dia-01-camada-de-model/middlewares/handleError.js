const handleError = (err, req, res, next) => {
  if (err.status) return res.status(err.status).json({ message: err.message});
  if (err.isJoi) return res.status(400).json({ message: err.details[0].message });
  }

module.exports = handleError;