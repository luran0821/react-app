const express = require('express')
const Router = express.Router()
const model = require('./model')
const User = model.getModel('user')

Router.get('/account',function(req, res){
 
User.find({}, function(err, doc){
    res.json(doc)
  })
})







module.exports = Router