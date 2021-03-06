const router = require("express").Router();
const { Post, User, Comment } = require("../../model");
const withAuth = require("../../utils/withAuth");

router.get("/", async (req, res) => {
    try {
        const postData = await Post.findAll({
            include: [{ model: Comment }, { model: User }]
        })
        res.json(postData)
    } catch (error) {
        console.log(error)
        res.json(error)
    }
})

router.post("/", withAuth, async (req, res) => {
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

router.delete('/:id', withAuth, async (req, res) => {
    try {
        const postData = await Post.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            },
        });

        if (!postData) {
            res.status(404).json({ message: 'No post found with this id!' });
            return;
        }

        res.status(200).json(postData);
    } catch (err) {
        console.log(err)
        res.status(500).json(err);
    }
});

router.put("/:id", withAuth, async (req, res) => {
    try {

        const postData = await Post.update(
            {
                title: req.body.title,
                post: req.body.post,
            },
            {
                where: {
                    id: req.params.id,
                    user_id: req.session.user_id,
                }
            }
        )

        if (!postData) {
            res.status(404).json({ message: 'No post found with this id!' });
            return;
        }

        res.status(200).json(postData);
    } catch (err) {
        console.log(err)
        res.status(500).json(err);
    }
})

module.exports = router;