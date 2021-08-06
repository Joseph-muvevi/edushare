const express = require("express") 
const router = express.Router()
const {Message, validate} = require("../models/message")

// get
router.get("/", async (req, res) => {
    const message = await Message.find().sort().limit(10)
    res.send(message)
})

// post
router.post("/", async (req, res) => {
    const {error} = validate(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    const message = await new Message(req.body).save()
    res.send(message)

})

// exports
module.exports = router