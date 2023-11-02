require('dotenv').config()
const pool = require('../config/db.js')
const express = require("express")
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

app.get("/", (req, res) => { // functions with parameters request and response "naming conventions"
    const q = "SELECT * FROM members"

    pool.query(q, function(err, data) {
        if (err) return res.json(err)
        return res.json(data)
    })
})

app.post("/", (req, res) => {
    const q = "INSERT INTO members (`name`, `membership`, `age`) VALUES (?)"
    const values = [
        req.body.name,
        req.body.membership,
        req.body.age
    ]
    pool.query(q, [values], (err, data) => {
        if (err) return res.json(err)
        return res.json("Member has been added")
    })
})

app.delete("/:id", (req, res) => {
    const memberId = req.params.id
    const q = "DELETE FROM members WHERE id = ?"

    pool.query(q, [memberId], (err, data) => {
        if (err) return res.json(err)
        return res.json("Member has been deleted")
    })
})

app.put("/:id", (req, res) => {
    const memberId = req.params.id
    const q = "UPDATE members SET `name` = ?, `membership` = ?, `age` = ? WHERE id = ?"

    const values = [
        req.body.name,
        req.body.membership,
        req.body.age
    ]

    pool.query(q, [...values, memberId], (err, data) => {
        if (err) return res.json(err)
        return res.json("Member has been updated")
    })
})

app.listen(8800, () => {
    console.log("Connected to backend!")
})