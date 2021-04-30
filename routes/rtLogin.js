const express=require('express')
const rtLogin=express.Router()
const daoUser=require('../dao/daoUser')
///////////////////////////////////////////
//isntanciar passport:
const passport = require('passport')
//instanciar la estrategia local:
const LocalStrategy = require('passport-local').Strategy
//métodos para serializar/deserializar
passport.serializeUser(function(user, done) {
    done(null, user.id)
})
passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
        done(err, user)
    })
})
//inicializar passport
rtLogin.use(passport.initialize())
rtLogin.use(passport.session())
///////////////////////////////////////////

passport.use('signup', new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password'
    },(email,password,done)=>{
        daoUser.create({
            email: email,
            password, password
        }).then(data=>{
            done(null,data)
        })
    })
)

rtLogin.post('/signup',(req,res)=>{
    passport.authenticate('signup',(err,data,info)=>{
        res.json(data)
    })(req,res)
})





module.exports=rtLogin