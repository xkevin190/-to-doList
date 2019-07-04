const Sequelize = require('sequelize')

sequelize = new Sequelize('varicodeTest', 'postgres', '21492475', {
    host: 'localhost',
    dialect: 'postgres',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
      }
  });
  
  
  module.exports ={
      sequelize
  }