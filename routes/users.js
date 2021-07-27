const express = require('express')
const router = express.Router()
const {A, validate} = require('../models/user')

// get
router.get('/', async (req, res) => {
    const users = await User.find().sort()
    if (!users) return res.status(404).send('No users!! Mind if ypu become the first one?')
    res.send(users)
})

// get by id
router.get('/:id', async (req, res) => {
    const user = await User.findById(req.params.id)
    if (!user) return res.status(404).send("User with that id doesn't exist")
    res.send(user)
})

// posting a new user
router.post('/', async (req, res) => {
    const {error} = validate(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    // checking out if a user exists
    const email = await User.findOne({email: req.body.email})
    if (email) return res.status(400).send('Invalid email or password')

    // creating the user
    const user = await new User(req.body).save()
    res.send(user)
})

// updating a user
router.put('/:id', async (req, res) => {
    const {error} = validate(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    // updating the user
    const user = await User.findByIdAndUpdate(
        req.params.id, {$set : req.body}, { new: true }
    )

    if (!user) return res.status(404).send('That user does not exist')
    res.send(user)
})

// deleting a user
router.delete('/:id', async(req, res) => {
    const user = await User.findByIdAndRemove(req.params.id)
    if (!user) return res.status(404).send("That user does not exist")
    res.send(user)
})

module.exports = router