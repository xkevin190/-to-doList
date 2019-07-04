const  Sequelize  = require("sequelize")
const  { sequelize } =  require("../db/connect")

 const Task = sequelize.define("tasks", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  task_name: {
    type: Sequelize.INTEGER
  },
  done: {
    type: Sequelize.BOOLEAN
  },
  userId: {
    type: Sequelize.INTEGER
  }
},
{
  timestamps:false
});


module.exports = Task