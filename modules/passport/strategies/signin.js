//Registro de un usuario
const LocalStrategy = require('passport-local').Strategy
const daoUser=require('../../../dao/daoUser')

module.exports= function (passport){
    passport.use('signin', new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password'
    },(email,password,done)=>{
        daoUser.findByEmail((email)

        ).then(user=>{
            if(!user ||user.password!=password)
                done(null,{response:'Error de autenticación'})
            else done(null,user)
            //envio email de confirmación
        }).catch(err=>{
            done(err,{mensaje:'hay errores'})
        })
    }))
}