const mongoose = require('mongoose')
const express = require('express')
const Router = express.Router()
const utils = require('utility')
const model = require('./model')
const Account = model.getModel('account')

const _filter = {'password':0,'__v':0}

// Account.create({
//   name: 'admin',
//   password: 'admin',
//   isAuth: true  
// })


Router.get('/inquire',function(req, res){
 
 
  // Account.remove({name: 'admin'}, function(err, doc){
  //   console.log(doc)
  // })


  //过滤字段{_id:0 ,__v:0}
  Account.find({},{_id:0 , __v:0, isAuth:0}, function(err, doc){
    res.json(doc)
  })
})


// Account.remove({name: 'admin'}, function(err, doc){
//   console.log(doc)
// })
// Account.find({}, function(err, doc){
//   console.log(11111)
// })







module.exports = Router