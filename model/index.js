const User = require('./user');
const Project = require('./project');
const Comment = require(`./comment.js`)


User.hasMany(Project, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Post.belongsTo(User, {
    foreignKey: 'user_id'
});

User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Comment.belongsTo(User, {
    foreignKey: 'user_id'
});



module.exports = { User, Post, Comment };
