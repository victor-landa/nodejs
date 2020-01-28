// Aquí comenzaremos a crear el servidor
const express = require('express');
const config = require('../config.js');
const app = express();

const swaggerUi = require('swagger-ui-express');

const bodyParser = require('body-parser');

// Creamos el objeto user
const user = require('./components/user/network');

// Creamos el objeto auth
const auth = require('./components/auth/network');

// bodyParser nos va a permitir trabajar con toda la data en JSON
app.use(bodyParser.json());

const swaggerDoc = require('./swagger.json');

// Creamos una primera ruta
app.use('/api/user', user);

// Creamos la ruta para el login/auth
app.use('/api/auth', auth)

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

// Definimos ROUTER
app.listen(config.api.port, () => {
  // Agregamos este callback para asegurarnos de que todo haya salido bien
  console.log('Port: ', config.api.port);
});