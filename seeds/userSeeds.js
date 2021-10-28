const { User } = require('../models')

const userData = [
    {
       Username: 'Alex',
       hashedPassword: 'SecretPassword' 
    }
]

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser
