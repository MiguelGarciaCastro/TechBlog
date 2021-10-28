const sequelize = require('../config/connection')
const { Model, DataTypes } = require('sequelize');


class blogPosts extends Model{};

 blogPosts.init(
     {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            tupe:DataTypes.STRING,
            allowNull: false,
        },
        body: {
            type: DataTypes.STRING,
            allowNull: false
        },
        postCreator: {
            type: DataTypes.INTEGER,
            references: {
                model: 'User',
                key: 'id'
            }
        },},
        {

            sequelize,
            timestamps: false,
            freezeTableName: true,
            underscored: true,
            modelName: 'Blogposts'
            
        },
     
 )

 module.exports = blogPosts;