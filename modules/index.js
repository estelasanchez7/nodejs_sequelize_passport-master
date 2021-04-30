//isntanciar passport:
const passport = require('passport')

const signup= require('./strategies/signup')
const signin= require('./strategies/signin')
const signGoogle= require('./strategies/signGoogle')

//registro de las diferentes estrategias
signup(passport)
signin(passport)
signGoogle(passport)

//exporto el módulo completo
module.exports=passport