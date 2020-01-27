// Aquí vamos a tener toda la parte de red de nuestro componente user
const express = require('express');

const router = express.Router();

router.get('/', function(req, res) {
  res.send('Everything works! 👨🏻‍🔧');
});