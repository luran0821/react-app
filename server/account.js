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
 
})
  // Account.remove({name: 'admin'}, function(err, doc){
  //   console.log(doc)
  // })


  //过滤字段{_id:0 ,__v:0}
  


Router.post('/login',function(req, res){
  
  const name =  req.body.name
  const password = req.body.password

  //console.log(password)
  Account.findOne({name: name},{_id:0 , __v:0, isAuth:0}, function(err, doc){

    if(err){
      return res.json({code: 0, msg: '没用该用户请注册 ！'})
     }
   
   if(doc){
     if(doc.password !== password) return  res.json({code: 0, msg: '密码错误 ！', login: false})
     else return res.json({code: 1, msg: '登陆成功 ！', login: true}) 
      

   }else{
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