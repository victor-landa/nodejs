// Aquí comenzaremos a crear el servidor
const express = require('express');
const config = require('../config.js');
const app = express();

// Creamos el objeto user
const user = require('./components/user/network');

// Creamos una primera ruta
app.use('/api/user', user)

// Definimos ROUTER
app.listen(config.api.port, () => {
  // Agregamos este callback para asegurarnos de que todo haya salido bien
  console.log('Port: ', config.api.port);
});