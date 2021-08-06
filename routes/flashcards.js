const {Flashcard, validate} = require("../models/flashcard")
const express = require("express")
const router = express.Router()

// get
router.get("/", async(req, res) => {
    const flashcards = await Flashcard.find().sort()
    if (!flashcards) return res.status(404).send("No flaschcards yet, please create one?")
    res.send(flashcards)
})

// get by ID
router.get("/:id", async (req, res) => {
    const flashcard = await Flashcard.findByID(req.params.id)
    if (!flashcard) return res.status(404).send("No flaschcards with that ID")
    res.send(flashcard)
})

// post
router.post("/", async(req, res) => {
    const {error} = validate(req.body)
    if (error) return res.status(400).send(error.details[0].message)
        
    const flashcard = await new Flashcard(req.body).save()

    // checking for plagiarism
    const plagiarism = await Flashcard.findOne({answers : req.body.answers})
    if (plagiarism) return res.status(400).send("Please stop copying..!")
    
    res.send(flashcard)
})

// update
router.put("/:id", async (req, res) => {
    const {error} = validate(req.body)
    if (error) return res.status(400).send(error.details[0].message)
    
    // checking for plagiarism
    const plagiarism = await Flashcard.findOne({answers : req.body.answers})
    if (plagiarism) return res.status(400).send("Please stop copying..!")

    const flashcard = await Flashcard.findByIdAndUpdate(
        req.params.id, {$set : req.body}, {new: true}
    )

    if (!flashcard) return res.status(404).send("That flashcard item does not exist")
    res.send(flashcard)
})

// delete
router.delete("/:id", async (req, res) => {
    const flashcard = await Flashcard.findByIdAndRemove(req.params.id)
    if (!flashcard) return res.status(404).send("That flashcard item does not exist")
    res.send(flashcard)
})

module.exports = router