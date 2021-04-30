const express=require('express')
const rtLogin=express.Router()
const passport = require('../modules/passport')

//registro de usuarios
rtLogin.post('/signup',(req,res)=>{
    passport.authenticate('signup',(err,data)=>{
        res.json(data)
    })(req,res)
})

//logueo de usuarios
rtLogin.post('/signin',(req,res)=>{
    passport.authenticate('signin',(err,data)=>{
        res.json(data)
    })(req,res)
})


////////////////GOOGLE///////////
//login de google
rtLogin.get('/signin-google',(req,res)=>{
    passport.authenticate('signinGoogle',{scope:['profile','email']})
})

//callback de google
rtLogin.get('/google/callback',(req,res)=>{ //este /google/callback se lo hemos dado desde google
    passport.authenticate('signinGoogle',(err,data)=>{
        res.json(data)
    })(req,res)
})


module.exports=rtLogin