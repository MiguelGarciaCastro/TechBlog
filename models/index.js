const User = require('./userData');
const blogPost = require('./blogPostsData')



blogPost.belongsTo(User, {
    foreignKey: 'post_creator',
    onDelete: "CASCADE"
});

User.hasMany(blogPost, {
    foreignKey: 'post_creator',
    onDelete: "CASCADE"
})

module.exports = {blogPost, User}
