const router = require("express").Router();
const { Post } = require("../../model");


router.post("/", async (req, res) => {
    try {
        const newPost = await Post.create({
            ...req.body,
            user_id: req.session.user_id,
        });
        res.status(200).json(newPost)
    } catch (err) {
        res.status(400).json("failed to create post!")
        console.log(err)
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const commentData = await Post.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            },
        });

        if (!commentData) {
            res.status(404).json({ message: 'No post found with this id!' });
            return;
        }

        res.status(200).json(commentData);
    } catch (err) {
        console.log(err)
        res.status(500).json(err);
    }
});

router.put("/:id", async (req, res) => {
    try {

        const commentData = await Post.update(
            {
                title: req.body.title,
                post: req.body.post,
            },
            {
                where: {
                    id: req.params.id,
                    // user_id: req.session.user_id,

                }
            })

        if (!commentData) {
            res.status(404).json({ message: 'No post found with this id!' });
            return;
        }
        res.status(200).json(commentData);
    } catch (error) {
        console.log(err)
        res.status(500).json(err);
    }
})

module.exports = router;