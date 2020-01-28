const auth = require('../../../auth');
const TABLE = 'auth';

module.exports = function(injectedStore) {
  let store = injectedStore;
  if(!store) {
    store = require('../../../store/dummy');
  }

  // Con estos dos parámetros podemos definir si el usuario está o no registrado.
  async function login(username, password) {
    // Primero definimos la data que tenemos
    const data = await store.query(TABLE, { username: username });
    if(data.password === password) {
      // Generamos token
      return auth.sign(data);
    } else {
      throw new Error('Información invalida')
    }
    // return data;
  }

  function upsert(data) {
    const authData = {
      id: data.id,
    }

    if(data.username) {
      authData.username = data.username;
    }

    if(data.password) {
      authData.password = data.password;
    }

    return store.upsert(TABLE, authData);
  }

  return {
    login,
    upsert,
  };
};