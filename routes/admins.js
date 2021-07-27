const express = require('express')
const router = express.Router()
const {Admin, validate} = require('../models/admin')
const _ = require('lodash')

//get request
router.get('/', async (req, res) => {
    const admin = await Admin.find().sort()
    res.send(admin)
})

// get by id
router.get('/:id', async (req, res) => {
    const admin = await Admin.findById(req.params.id)
    if (!admin) return res.status(404).send("Admin with that ID doesn't exist")
    res.send(admin)
})

// posting an admins
router.post('/', async (req, res) => {
    const {error} = validate(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    // checking if that admin exists
    const email = await Admin.findOne({email: req.body.email})
    if (email) return res.status(400).send("Invalid email or password")

    // cheking if the username exists
    const username = await Admin.findOne({username: req.body.username})
    if (username) return res.status(400).send("Username already taken")

    let admin = await new Admin(_.pick(req.body, [
        'fName',
        'lName',
        'username',
        'location',
        'email',
        'password'
    ]))
    admin.save()
    res.send(admin)
})

// updating an admin
router.put('/:id', async (req, res) => {
    const {error} = validate(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    const admin = await Admin.findByIdAndUpdate(
        req.params.id,
        {$set : req.body},
        {new: true}
    )
    if (!admin) res.status(404).send("User doesn't exist")
    res.send(admin)
})

// deleting admin
router.delete('/:id', async (req, res) => {
    const admin = await Admin.findOneAndRemove(req.params.id)
    if (!admin) return res.status(400).send("No admin with that Id")
})

module.exports = router