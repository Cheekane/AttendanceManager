require('dotenv').config({path:'../.env'}) // looks into parent directory (config -> backend)
const mysql = require('mysql2')

// connects to the mysql database
const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
})

const promisePool = pool.promise()

// var sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))"

promisePool
    .getConnection()
    .then(() => {
        console.log("Connection pool created successfully")
    })
    .catch((error) => {
        console.error("Error creating connection pool:", error)
    })

module.exports = pool