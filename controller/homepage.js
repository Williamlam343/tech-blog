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

router.get("/", async (req, res) => {
    try {
        const commentData = (await Comment.findAll({
            include: [{
                model: User,
            }]
        }));

        // req.session.save(() => {
        //     req.session.user_id = userData.id;
        //     req.session.logged_in = true;

        //     res.status(200).json(userData);
        // });
    } catch (error) {
        console.log(err)
        res.status(400).json(err);
    }
})

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