module.exports = {
  api: {
    // Con esto vamos a poder setear el puerto desde variables de entorno.
    port: process.env.API_PORT || 3000,
  }
}