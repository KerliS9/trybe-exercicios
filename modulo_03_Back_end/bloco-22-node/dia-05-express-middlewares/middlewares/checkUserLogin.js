const crypto = require('crypto');

const checkUserLogin = (req, res) => {
  const { email, password, firstName, phone } = req.body;
  if ([email, password, firstName, phone].includes('')) return res.status(401).json({ "message": "missing fields" });

  const token = crypto.randomBytes(8).toString('hex');
  return res.status(200).json({ "token": token})

};

module.exports = checkUserLogin;