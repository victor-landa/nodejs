module.exports = {
  api: {
    // Con esto vamos a poder setear el puerto desde variables de entorno.
    port: process.env.API_PORT || 3000,
  },
  jwt: {
    secret: process.env.JWT_SECRET || 'secretCode!!_**__-',
  },
  mysql: {
    host: process.env.MYSQL_HOST || 'remotemysql.com',
    user: process.env.MYSQL_USER || 'AFrxygM3dR',
    password: process.env.MYSQL_PASS || '9teSfnxW77',
    database: process.env.MYSQL_DB || 'AFrxygM3dR',
  }
}