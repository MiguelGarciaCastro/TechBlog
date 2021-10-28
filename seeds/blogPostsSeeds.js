const { Blogposts } = require('../models')

const blogPostData = [
    {
        title: 'This Should Work',
        body: 'If this works I will be very happy.'
    },
]

const seedBlogPosts = () => Blogposts.bulkCreate(blogPostData);


module.exports = seedBlogPosts
