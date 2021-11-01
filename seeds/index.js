const sequelize = require('../config/connection')
const blogPostData = require('./blogPostsSeeds')
const userData = require('./userSeeds')
const {User, blogPost} = require('../models')


const seedAll = async () => {
   try{
     await sequelize.query('SET FOREIGN_KEY_CHECKS = 0')
      await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');
    await User.bulkCreate(userData);
    
    console.log('\n----- CATEGORIES SEEDED -----\n');

   await blogPost.bulkCreate(blogPostData);
    console.log('\n----- PRODUCTS SEEDED -----\n');

    sequelize.query('SET FOREIGN_KEY_CHECKS = 1')
    process.exit(0);
}catch (e){
  console.log(e)
}
  };


  seedAll();
  