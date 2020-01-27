// Este controller sí debe tener acceso al store/almacenamiento de datos.
const store = require('../../../store/dummy');

const TABLE = 'user';

function list() {
  return store.list(TABLE);
}

module.exports = {
  list,
}