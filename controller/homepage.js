const router = require('express').Router();
const withAuth = require("../utils/withAuth");
const { User, Post, Comment } = require("../model")

router.get('/', async (req, res) => {
    try {
        const postData = (await Post.findAll({
            include: [{
                model: User,
            }]
        }));

        const posts = postData.map((post) => post.toJSON());
        console.log(posts)
        res.render('homepage', { posts });

    } catch (error) {
        console.log(error)
    }
});
router.get('/dashboard', async (req, res) => {
    res.render('dashboard');
});
router.get('/login', async (req, res) => {
    res.render('login');
});
router.get('/signup', async (req, res) => {
    res.render('signup');
});

module.exports = router;