const express = require('express')
const router = express.Router()
const Joi = require('joi')
const {User} = require('../models/user')
const bcrypt = require('bcrypt')

// the post method
router.post('/', async (req, res) => {
    const {error} = validate(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    const user = await User.findOne({email: req.body.email})
    if (!user) return res.status(400).send('Invalid email or password')

    // cheking the password
    const validPassword = await bcrypt.compare(req.body.password, user.password )
    if (!validPassword) return res.status(400).send('Invalid email or password')

    res.send(true)

})

// joi validation
const validate  = (req) => {
    const schema = Joi.object({
        email: Joi.string().required().min(4).max(100),
        password: Joi.string().min(8).max(100).required().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
    })

    return schema.validate(req)
}

module.exports = router