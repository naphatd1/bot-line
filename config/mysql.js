const db = require('mysql2/promise')

exports.connectMysql = async () => {
  const conn = await db.createConnection({
    host: process.env.HOST_DB,
    user: process.env.HOST_NAME,
    password: process.env.HOST_PASSWORD,
    port: process.env.HOST_PORT,
    database: process.env.HOST_DB_NAME,
  })
  // const conn = await db.createConnection(process.env.DATABASE_URL)
  return conn
}
