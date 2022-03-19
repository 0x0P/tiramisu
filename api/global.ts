const { Pool } = require('pg')

const db = new Pool({
    user: 'dbuser',
    host: 'database.server.com',
    database: 'mydb',
    password: 'secretpassword',
    port: 5432,
  })
  


export { db }