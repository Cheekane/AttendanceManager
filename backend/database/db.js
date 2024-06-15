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

const insertPerson = async (firstname, lastname, category, email, phoneNumber) => {
    try {
        const [result] = await promisePool.query(`
            INSERT INTO attendees (firstname, lastname, category, email, phoneNumber)
            VALUES (?, ?, ?, ?, ?)
        `, [firstname, lastname, category, email, phoneNumber])
        return result[0]
    } catch (error) {
        console.error('Error inserting person', error)
        throw error
    }
}

module.exports = { insertPerson }