const express = require("express")
const {Author, validate} = require("../models/author")
const router = express.Router()

// get 
router.get("/", async (req, res) => {
    const authors = await Author.find().sort()
    res.send(authors)
})

// geting by ID
router.get("/:id", async (req, res) => {
    const author = await Author.findById(req.params.id)
    if (!author) return res.status(404).send("author with that ID does not exist")
    res.send(author)
})

// posting a author
router.post("/", async (req, res) => {
    const {error} = validate(req.body)
    if (error) return res.status(404).send(error.details[0].message)

    const existingTitle = await Author.findOne({email: req.body.email})
    if (existingTitle) return res.status(400).send("A course with that title exists, please try another title")

    const author = await new Author(req.body).save()
    res.send(author)
})

// updating a given author
router.put("/:id", async (req, res) => {
    const {error} = validate(req.body)
    if (error) return res.status(404).send(error.details[0].message)

    const author = await Author.findByIdAndUpdate(
        req.params.id,
        { $set : req.body},
        { new: true }
    )
    
    if (!author) return res.status(404).send("author with that ID does not exist")
    res.send(author)
})

// deleting a author
router.delete("/:id", async (req, res) => {
    const author = await Author.findByIdAndRemove(req.params.id)
    if (!author) return res.status(404).send("author with that ID does not exist")
    res.send(author)
})

// export
module.exports = router