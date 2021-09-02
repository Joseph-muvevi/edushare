const express = require("express")
const router = express.Router()
const {Review, validate} = require("../models/review")

// get review
router.get("/", async (req, res) => {
    const review = await Review.find().sort().limit(10)
    res.send(review)
})

// getting a specific review
router.get("/:id", async (req, res) => {
    const review = await Review.findById(req.params.id)
    if (!review) return res.status(404).send("No product review at the moment")
    res.send(review)
})

// post
router.post("/", async (req, res) => {
    const {error} = validate(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    const review = await new Review(req.body).save()
    
    // checking for review plagiarism
    const plagiarism = await Review.findOne({reviewContent: req.body.reviewContent})
    if (plagiarism) return res.status(400).send("Please stop copying other's review")

    res.send(review)
})

// put
router.put("/:id", async (req, res) => {
    const {error} = validate(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    const review = await Review.findByIdAndUpdate(
        req.params.id, {$set : req.body}, { new: true}
    )
    if (!review) return res.status(404).send("That review item does not exist")
    res.send(review)
})

// deleting a given review
router.delete("/:id", async (req, res) => {
    const review = await Review.findByIdAndRemove(req.params.id)
    if (!review) return res.status(404).send("That review item does not exist")
    res.send(review)
})

module.exports = router