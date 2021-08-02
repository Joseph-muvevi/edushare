const express = require("express")
const {Document, validate} = require("../models/document")
const router = express.Router()

// get 
router.get("/", async (req, res) => {
    const documents = await Document.find().sort()
    res.send(documents)
})

// geting by ID
router.get("/:id", async (req, res) => {
    const document = await Document.findById(req.params.id)
    if (!document) return res.status(404).send("Document with that ID does not exist")
    res.send(document)
})

// posting a document
router.post("/", async (req, res) => {
    const {error} = validate(req.body)
    if (error) return res.status(404).send(error.details[0].message)

    const existingTitle = await Document.findOne({docTitle: req.body.docTitle})
    if (existingTitle) return res.status(400).send("A course with that title exists, please try another title")

    const document = await new Document(req.body).save()
    res.send(document)
})

// updating a given document
router.put("/:id", async (req, res) => {
    const {error} = validate(req.body)
    if (error) return res.status(404).send(error.details[0].message)

    const document = await Document.findByIdAndUpdate(
        req.params.id,
        { $set : req.body},
        { new: true }
    )
    
    if (!document) return res.status(404).send("Document with that ID does not exist")
    res.send(document)
})

// deleting a document
router.delete("/:id", async (req, res) => {
    const document = await Document.findByIdAndRemove(req.params.id)
    if (!document) return res.status(404).send("Document with that ID does not exist")
    res.send(document)
})

// export
module.exports = router