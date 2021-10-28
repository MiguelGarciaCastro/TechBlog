const User = require('./userData');
const blogPosts = require('./blogPostsData')



blogPosts.belongsTo(User, {
    foreignKey: 'postCreator',
    onDelete: "CASCADE"
});

User.hasMany(blogPosts, {
    foreignKey: 'user_id'
})

module.exports = {blogPosts, User}