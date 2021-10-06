const router = require('express').Router();
const withAuth = require("../utils/withAuth");
const { User, Post, Comment } = require("../model")

router.get('/', async (req, res) => {
    try {
        const postData = (await Post.findAll({
            include: [{ model: User }, { model: Post }]
        }));

        const posts = postData.map((post) => post.toJSON());

        res.render('homepage', { posts });

    } catch (error) {
        console.log(error)
    }
});

router.get("/", async (req, res) => {
    try {
        const commentData = (await Comment.findAll({
            include: [{
                model: Post,
            }]
        }));
        const comments = commentData.map((comment) => comment.toJSON());

        console.log(comments)
        res.render("homepage", { comments })
    } catch (error) {
        console.log(err)
        res.status(400).json(err);
    }
})

router.get('/dashboard', async (req, res) => {
    res.render('dashboard', { logged_in: req.session.logged_in, });
});
router.get('/login', async (req, res) => {
    res.render('login');
});
router.get('/signup', async (req, res) => {
    res.render('signup');
});

module.exports = router;