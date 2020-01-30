// Este archivo nos va a permitir 
// hacer toda la exportación de los controladores.

// Aquí vamos a tener la base de datos por defecto 
// que queramos setear en nuestro controlador.
// const store = require('../../../store/dummy');
const store = require('../../../store/mysql');

// Esto nos va a traer el controlador.
const ctrl = require('./controller');

// El controlador hasta ahora es sólo un objeto.
// module.exports = ctrl;

// Lo  vamos a convertir en una función y a inyectrale nuestra base de datos.
module.exports = ctrl(store);