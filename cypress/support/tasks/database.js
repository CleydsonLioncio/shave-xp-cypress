const {Pool} = require('pg')

const dbConfig = {
  host: 'babar.db.elephantsql.com',
  user: 'ijwajvem',
  password: 'wuha1fSdub5cC4ABLqaKvHWP3eCas_M6',
  database: 'ijwajvem',
  port: 5432
}

module.exports = {
          removeUser(email) {
          return new Promise(function (resolve){
            const pool = new Pool(dbConfig)

            pool.query('DELETE FROM users WHERE email = $1', [email], function(error, result) {
              if (error) {
                throw error
              }
              resolve({success: result})
            })
          })
        }
}