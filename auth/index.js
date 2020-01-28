const jwt = require('jsonwebtoken');

// Creamos el primer token
function sign(data) {
  return jwt.sign(data, 'secret');
}

module.exports = {
  sign,
};