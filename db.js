import mysql from 'mysql2/promise.js'

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "librarydb"
})

export default pool;