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

const insertAttendee = async (firstname, lastname, category, email, phoneNumber) => {
    try {
        const [result] = await promisePool.query(`
            INSERT INTO attendees (firstname, lastname, category, email, phoneNumber)
            VALUES (?, ?, ?, ?, ?)
        `, [firstname, lastname, category, email, phoneNumber])
    } catch (error) {
        console.error('Error inserting Attendee', error)
        throw error
    }
}

const getAttendee = async (firstname, lastname, email) => {
    try {
        const [result] = await promisePool.query(`
            SELECT *
            FROM attendees
            WHERE firstname = ? AND lastname = ? AND email = ?
        `, [firstname, lastname, email])
        return result
    } catch (error) {
        console.error('Error getting Attendees')
    }
}

const getGroups = async () => {
    try {
        const [tables] = await promisePool.query("SHOW TABLES")
        const tableNames = tables.map(table => Object.values(table)[0])

        const data = {}

        for (const tableName of tableNames) {
            if (tableName === "groupdesc") { // skip the table named groupdesc
                continue;
            }
            const [rows] = await promisePool.query(`SELECT * FROM ${tableName}`)
            const [countResult] = await promisePool.query(`SELECT COUNT(*) AS count FROM ${tableName}`)
            const rowCount = countResult[0].count

            data[tableName] = {
                rows,
                count: rowCount
            }
        }

        return data
    } catch (error) {
        console.error('Failed to fetch table data', error)
        throw error 
    }
}

const createGroupTable = async (groupName, groupDescription) => {
    const tableName = groupName.replace(/\s+/g, '_').toLowerCase()
    try {
        // Create the new group table
        await promisePool.query(`
            CREATE TABLE ${tableName} (
                firstname VARCHAR(255),
                lastname VARCHAR(255),
                category VARCHAR(255),
                email VARCHAR(255),
                phoneNumber VARCHAR(12),
                PRIMARY KEY (firstname, lastname, email)
            )
        `)

        // Insert the group info into the groups table
        await promisePool.query(`
            INSERT INTO groupdesc (groupName, description)
            VALUES (?, ?)
        `, [tableName, groupDescription])

    } catch (error) {
        console.error('Error creating group table:', error)
        throw error
    }
}

const deleteGroup = async (groupName) => {
    try {
        await promisePool.query(`
            DROP TABLE IF EXISTS ${groupName}
        `)

        await promisePool.query(`
            DELETE FROM groupdesc
            WHERE groupName = ?
        `, [groupName])

        console.log(`Group '${groupName}' deleted successfully`)
    } catch (error) {
        console.error('Error deleting group:', error)
        throw error
    }
}

module.exports = { insertAttendee, getAttendee, getGroups, createGroupTable, deleteGroup }