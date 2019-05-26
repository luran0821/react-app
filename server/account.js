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
//   isAuth: true ,
//      add: '有',
//      adelete: '没有',
//      modify: '有',

// })


Router.get('/inquire',function(req, res){
 
 
  // Account.remove({name: 'admin'}, function(err, doc){
  //   console.log(doc)
  // })


  //过滤字段{_id:0 ,__v:0}
  Account.find({name: 'admin'},{_id:0 , __v:0, isAuth:0}, function(err, doc){
   
    res.json(doc)
  })
})


Router.post('/login',function(req, res){
  const data = req.body
  console.log(data)
  Account.find({name: data.name},{_id:0 , __v:0, isAuth:0}, function(err, doc){
   if(doc){
     return res.json({code: 1, msg: '登陆成功 ！'})
   }
   if(err){
    return res.json({code: 0, msg: '没用该用户请注册 ！'})
   }
  })
  
  
})

// Account.remove({name: 'admin'}, function(err, doc){
//   console.log(doc)
// })
// Account.find({}, function(err, doc){
//   console.log(11111)
// })







module.exports = Router