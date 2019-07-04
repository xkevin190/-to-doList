const  Sequelize  = require("sequelize")
const  { sequelize } =  require("../db/connect")
const  Task =  require('./task')


const Users = sequelize.define("user", {
  id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: Sequelize.TEXT },
  surname: { type: Sequelize.TEXT },
  email: { type: Sequelize.TEXT },
  password: { type: Sequelize.TEXT }
},
{
    timestamps:false
});


Users.hasMany(Task , {
   foreingKey:'userId',
   sourceKey: 'id'
})

Task.belongsTo( Users, {
    foreingKey:'userId',
    sourceKey: 'id'
 })

 
 module.exports = Users