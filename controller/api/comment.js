const router = require('express').Router();
const { Comment, User } = require('../../model');

router.get("/", async (req, res) => {
    try {
        const commentData = await Comment.findAll({
            include: [{
                model: User,
            }]
        })
        res.json(commentData)
    } catch (error) {
        res.json(error)
    }
})

router.post("/", async (req, res) => {
    try {
        console.log(req.body)
        const newComment = await Comment.create({
            ...req.body,
            user_id: req.session.user_id,
        });

        res.status(200).json(newComment)
    } catch (err) {
        res.status(400).json("failed to create comment!")
        console.log(err)
    }
})



module.exports = router;