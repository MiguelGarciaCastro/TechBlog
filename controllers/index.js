const { User, blogPost } = require('../models');

const router = require('express').Router();

// const blogPosts = require('../models/blogPosts')

// html routes
router.get('/', async (req, res) =>{
  try{  
    const allBlogs = await blogPost.findAll()
    const serializedBlogs = allBlogs.map( post => {
      return post.get({ plain: true })
    })


    res.render('Home', {
      secondarytitle: 'Home',
      posts: serializedBlogs 
    })
} catch(e) {
    res.json(e).status(404)
}})


//This route gets the dashboard page
router.get('/dashboard', async (req, res) => {
    try {
       
    }catch(e){
      res.json(e)
    }
})


router.get('/newUser', (req, res) => res.render('signUpPage', {
  secondarytitle: 'The Tech Blog',
  signingIn: false,
}))

//This route gets the logout page
router.get('/logout', (req, res) => res.render('home', {
  secondarytitle: 'The Tech Blog'
  })

)
//TODO: When the user logs out they are redirected to the home page


// This route gets the login page
router.get('/login', (req, res) => res.render('login', {
    secondarytitle: 'The Tech Blog',
    signingIn: true}
))
//TODO: Once the user logins in they need to be redirected to the dashboard

//TODO: On the login page if the user clicks on the Sign Up Instead then we redirect them to the Sign Up box and give them the option to log in instead in place of where the sign up instead click link is. 

//TODO: We need to create a route to generate to get the form data and inject our sign up partials

//TODO: Create CRUD Methods To add/delete and update posts

// router.get('/add-post', (req, res) => {
//   res.render('add-post')
// })

// router.get('/blog', (req, res) => {
//   res.render('blog', {
//     post: blogPosts.map(post => {
      
//       const slug = slugify(post.name, { lower: true })
//       post.slug = slug
//       return post
//     })
//   })
// })

// router.get('/blog/:slug', (req, res) => {
//   const postObj = blogPosts
//     .find(post => req.params.slug === post.slug)

//   res.render('post', postObj)
// })

// router.post('/api/blogpost', (req, res) => {
//   const body = req.body
//   body.date = new Date()
//   blogPosts.push(body)
//   res.status(200).send('Post added succesfully!')
// })

module.exports = router
