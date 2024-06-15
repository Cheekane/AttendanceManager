require('dotenv').config()
const express = require("express")
const cors = require('cors')
const { insertPerson } = require('../database/db.js')

const app = express()

app.use(express.json())
app.use(cors())

// define methods and their parameters here

app.post("/person", (req, res) => {
    const { firstname, lastname, category, email, phoneNumber } = req.body
    try {
        const person = insertPerson(firstname, lastname, category, email, phoneNumber)
        res.status(201).send(person)
    } catch (error) {
        console.error('Failed to insert person:', error)
        res.status(500).send({ error: 'Failed to insert person' })
    }
})


app.listen(8800, () => {
    console.log("Connected to backend! Server running on port 8800.")
})