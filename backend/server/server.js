require('dotenv').config()
const express = require("express")
const cors = require('cors')
const { insertAttendee, getAttendee, getGroups, createGroupTable, deleteGroup } = require('../database/db.js')

const app = express()

app.use(express.json())
app.use(cors())

// define methods and their parameters here

app.post("/attendee", async (req, res) => {
    const { firstname, lastname, category, email, phoneNumber } = req.body
    try {
        const attendee = await insertAttendee(firstname, lastname, category, email, phoneNumber)
        res.status(201).send(attendee)
    } catch (error) {
        console.error('Failed to insert attendee:', error)
        res.status(500).send({ error: 'Failed to insert attendee' })
    }
})

app.get("/attendee", async (req, res) => {
    const { firstname, lastname, email } = req.query // Use query parameters for GET requests
    try {
        const attendee = await getAttendee(firstname, lastname, email)
        res.status(200).send(attendee)
    } catch (error) {
        console.error('Failed to get attendee:', error)
        res.status(500).send({ error: 'Failed to get attendee' })
    }
})

app.get("/groups", async (req, res) => {
    try {
        const groups = await getGroups()
        res.status(200).send(groups)
    } catch (error) {
        console.error('Failed to fetch group data', error)
        res.status(500).send({ error: 'Failed to fetch group data' })
    }
})

app.post("/group", async (req, res) => {
    const { groupName, description } = req.body;
    try {
        await createGroupTable(groupName, description);
        res.status(201).send({ message: `Table for group ${groupName} created successfully` });
    } catch (error) {
        console.error('Failed to create group table:', error);
        res.status(500).send({ error: 'Failed to create group table' });
    }
});

app.delete('/group/:groupName', async (req, res) => {
    const groupName = req.params.groupName
    
    try {
        await deleteGroup(groupName)
        res.status(200).json({ message: `Group '${groupName}' deleted successfully`})
    } catch (error) {
        console.error('Failed to delete group:', error)
        res.status(500).json({ error: 'Failed to delete group' })
    }
})

app.listen(8800, () => {
    console.log("Connected to backend! Server running on port 8800.")
})