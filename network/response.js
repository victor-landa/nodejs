// En esta carpeta (network) estará todo lo que necesitemos para la red.
exports.success = function(req, res, message, status) {
  let statusCode = status || 200;
  let statusMessage = message || '';
  res.status(status).send({
    error: false,
    status: status,
    body: message
  });
}

exports.error = function(req, res, message, status) {
  // Preparamos el status -- En caso de que no nos venga ningún status vamos a dejar el código 500
  let statusCode = status || 500;
  let statusMessage = message || 'Internal server error';
  res.status(statusCode).send({
    error: false,
    status: status,
    body: message
  });
}