const sequelize = require('../config/connection')
const seedblogPosts = require('./blogPostsSeeds')
const seedUser = require('./userSeeds')

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');
    await seedUser();
    
    console.log('\n----- CATEGORIES SEEDED -----\n');

    await seedblogPosts();
    console.log('\n----- PRODUCTS SEEDED -----\n');

    process.exit(0);
  };

  seedAll();
