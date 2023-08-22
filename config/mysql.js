const db = require('mysql2/promise')

exports.connectMysql = async () => {
  // const conn = await db.createConnection({
  //   host: '110.170.148.96',
  //   user: 'root',
  //   password: '1234',
  //   port: '3307',
  //   database: 'expressdb',
  // })
  const conn = await db.createConnection(process.env.DATABASE_URL)
  return conn
}
