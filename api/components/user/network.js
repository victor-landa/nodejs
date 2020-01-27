// Aquí vamos a tener toda la parte de red de nuestro componente user
const express = require('express');

// Vamos a importar response.js
const response = require('../../../network/response');

// Importamos nuestro controlador
const Controller = require('./controller');

const router = express.Router();

router.get('/', function(req, res) {
  const lista = Controller.list();
  // res.send('Everything works! 👨🏻‍🔧');
  response.success(req, res, lista, 200);
});

// Si no exportamos el router lo que se va a exportar es un objeto vacío.
module.exports = router;