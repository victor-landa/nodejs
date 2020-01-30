// Aquí vamos a tener toda la parte de red de nuestro componente user
const express = require('express');
// Importamos el middleware
const secure = require('./secure');
// Vamos a importar response.js
const response = require('../../../network/response');
// Importamos nuestro controlador
const Controller = require('./index');


const router = express.Router();
// Routes
router.get('/', list);
router.get('/:id', get);
router.post('/', upsert);
router.put('/', secure('update'), upsert);


// Internal functions
function list(req, res, next) {
  Controller.list()
    .then((lista) => {
      response.success(req, res, lista, 200);
    })
    .catch(next);
}

function get(req, res, next) {
  Controller.get(req.params.id)
    .then((user) => {
      response.success(req, res, user, 200);
    })
    .catch(next);
}

function upsert(req, res, next) {
  Controller.upsert(req.body)
    .then((user) => {
      response.success(req, res, user, 201);
    })
    .catch(next);
}

// Si no exportamos el router lo que se va a exportar es un objeto vacío.
module.exports = router;