const bcrypt = require('bcrypt');

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

    // Hacemos la validación con bcrypt
    return bcrypt.compare(password, data.password)
      .then(equal => {
        if(equal === true) {
          // Generamos token
          return auth.sign(data);
        } else {
          throw new Error('Información invalida')
        }
      });
  }

  async function upsert(data) {
    const authData = {
      id: data.id,
    }

    if(data.username) {
      authData.username = data.username;
    }

    if(data.password) {
      // El segundo parámetro que recibe hash es cuántas veces queremos que se 
      // ejecute el algoritmo que va a hashear nuestra password, 
      // comúnmente se establece un valor de entre 5 y diez veces, 
      // mientras más veces se ejecuta el algoritmo más segura 
      // será la contraseña pero también más se va a tardar en hashearla.
      authData.password = await bcrypt.hash(data.password, 5);
    }

    return store.upsert(TABLE, authData);
  }

  return {
    login,
    upsert,
  };
};