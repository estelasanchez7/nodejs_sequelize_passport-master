require('dotenv').config()
const express = require('express')
const session = require('express-session')
const app = express()
const rtMain = require('./routes/rtMain')
const rtLogin = require('./routes/rtLogin')

//middlewares
app.use(express.urlencoded({extended:true}))
app.use(express.json())

//session:
app.use(session({ //gestión de sesiones
    secret: 'miclavesecreta',
    resave: false,
    saveUninitialized: true
}))

//enrutador principal
app.use('/',rtMain)
app.use('/login',rtLogin)

//base de datos
const db=require('./models')
db.sequelize.authenticate()
  .then(() => console.log('Connection has been established successfully.'))
  .catch(err => console.error('Unable to connect to the database:', err))
 
//arrancamos el servidor:
app.listen(8081,(err)=>{
    console.log('Server run on port 8081')
})