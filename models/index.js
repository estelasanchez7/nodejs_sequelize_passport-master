//https://sequelize.org/v4/manual/installation/usage.html

const Sequelize = require('sequelize')
const sequelize = new Sequelize(process.env.DB_URI)

const db={}
db.Sequelize=Sequelize
db.sequelize=sequelize

db.users=require("./user")(sequelize,Sequelize)

//associations

//db.sequelize.sync()
module.exports=db