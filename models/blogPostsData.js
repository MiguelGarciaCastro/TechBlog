const sequelize = require('../config/connection')
const { Model, DataTypes, Sequelize } = require('sequelize');


class blogPost extends Model{};

 blogPost.init(
     {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
            primaryKey:true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        body: {
            type: DataTypes.STRING,
            allowNull: false
            
        },
        dateCreated: {
            type: DataTypes.DATEONLY,
            defaultValue: Sequelize.NOW 
        },},
        {

            sequelize,
            timestamps: false,
            freezeTableName: true,
            underscored: true,
            modelName: 'blogPost'
            
        },
     
 )

 module.exports = blogPost;