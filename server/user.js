const mongoose = require('mongoose')
const express = require('express')
const Router = express.Router()
const utils = require('utility')
const model = require('./model')
const User = model.getModel('user')

const _filter = {'password':0,'__v':0}

// User.create({
//   name: 'admin',
//   password: 'admin',
//   isAuth: true  
// })


Router.get('/account',function(req, res){
 
 
  // User.remove({name: 'admin'}, function(err, doc){
  //   console.log(doc)
  // })
  User.find({}, function(err, doc){
    console.log(11111)
    res.json(doc)
  })
})


// User.remove({name: 'admin'}, function(err, doc){
//   console.log(doc)
// })
// User.find({}, function(err, doc){
//   console.log(11111)
// })







module.exports = Router