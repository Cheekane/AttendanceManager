require('dotenv').config()
const pool = require('../config/db.js')
const express = require("express")
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

app.get("/members", (req, res) => { // functions with parameters request and response "naming conventions"
    const q = "SELECT * FROM members"

    pool.query(q, function(err, data) {
        if (err) return res.json(err)
        return res.json(data)
    })
})

app.get("/member/:id", (req, res) => {
    const memberId = req.params.id
    const q = "SELECT * FROM members WHERE id = ?"

    pool.query(q, [memberId], (err, data) => {
        if (err) return res.json(err)
        return res.json(data[0]) // returns the first object in the array
    })
})

app.post("/member", (req, res) => {
    const q = "INSERT INTO members (`firstname`, `lastname`, `membership`, `age`) VALUES (?)"
    const values = [
        req.body.firstname,
        req.body.lastname,
        req.body.membership,
        req.body.age
    ]

    pool.query(q, [values], (err, data) => {
        if (err) return res.json(err)
        return res.json("Member has been added")
    })
})

app.delete("/member/:id", (req, res) => {
    const memberId = req.params.id
    const q = "DELETE FROM members WHERE id = ?"

    pool.query(q, [memberId], (err, data) => {
        if (err) return res.json(err)
        return res.json("Member has been deleted")
    })
})

app.put("/member/:id", (req, res) => {
    const memberId = req.params.id
    const q = "UPDATE members SET `firstname` = ?, `lastname` = ?, `membership` = ?, `age` = ? WHERE id = ?"

    const values = [
        req.body.firstname,
        req.body.lastname,
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