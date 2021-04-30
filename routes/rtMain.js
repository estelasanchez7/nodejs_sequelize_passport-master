const express = require('express')
const rtMain = express.Router()
const daoUser=require('../dao/daoUser')
//aqui te creas las rutas get, post, etc.. que necesies

rtMain.get('/', function (req, res) {
    res.json({response:'Server run!'})
})

rtMain.get('/ok',(req,res)=>{
    res.json({response:'ok'})
})

rtMain.get('/error',(req,res)=>{
    res.json({response:'error'})
})

module.exports=rtMain