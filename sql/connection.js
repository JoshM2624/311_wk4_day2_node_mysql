const mysql = require('mysql')

class Connection {
  constructor() {
    if (!this.pool) {
      console.log('creating connection...')
      this.pool = mysql.createPool({
        connectionLimit: 100,
        host: '34.66.40.161',
        user: 'root',
        password: 'Lakers2020',
        database: 'admin',
        debug: false
      })
      return this.pool
    }
    return this.pool
  }
}
const instance = new Connection()

module.exports = instance;