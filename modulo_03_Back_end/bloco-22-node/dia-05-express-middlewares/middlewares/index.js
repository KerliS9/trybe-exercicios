const products = require('./products');
const inform = require('./inform');
const date = require('./date');
const warranty = require('./warranty');
const checkUserLogin = require('./checkUserLogin');
const auth = require('./auth');

module.exports = {
  pr: { products, inform, date, warranty },
  user: { checkUserLogin, auth }
}