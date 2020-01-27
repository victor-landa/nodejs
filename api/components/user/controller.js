// Este controller sí debe tener acceso al store/almacenamiento de datos.
const TABLE = 'user';

// Con esta dependenia vamos a estar generando ids;
const nadoid = require('nanoid');

module.exports = function(injectedStore) {
  let store = injectedStore;
  if(!store) {
    store = require('../../../store/dummy');
  }

  function list() {
    return store.list(TABLE);
  }

  function get(id) {
    return store.get(TABLE, id);
  }

  function upsert(body) {
    const user = {
      name: body.name
    }

    if(body.id) {
      user.id = body.id;
    } else {
      user.id = nanoid();
    }

    return store.upsert(TABLE, user);
  }

  return {
    list,
    get,
    upsert,
  };
}