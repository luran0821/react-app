const mongoose = require('mongoose')
const express = require('express')
const Router = express.Router()
const utils = require('utility')
const model = require('./model')
const Account = model.getModel('account')

//过滤字段{_id:0 ,__v:0}
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
  Account.find({}, function(err, doc){
    return res.json(doc)
  })
})
  // Account.remove({name: 'admin'}, function(err, doc){
  //   console.log(doc)
  // })


  
  Router.post('/add', function(req, res){
    let data = {
      name: '',
        password: '',
        isAuth: '' ,
        add: '',
        adelete: '',
        modify: '',
      
    }
    data = req.body
    Account.create({
      name: data.name,
      password: data.password,
      add: data.add,
      adelete: data.adelete,
      modify: data.modify
    },function(err, doc){

      return res.json(doc)
    })
  })
//updateOne

Router.post('/modify', function(req, res){
  let data = {
     _id:'',
     name: '',
      password: '',
      isAuth: '' ,
      add: '',
      adelete: '',
      modify: '',  
  }
  data = req.body
  //todo
  Account.updateMany({_id: data._id}, {$set: {
      name: data.name,
      password: data.password,
      add: data.add,
      adelete: data.adelete,
      modify: data.modify
  }}
  , function(err, doc){
    console.log(doc)
    return res.json(doc)
  })
})





Router.post('/login',function(req, res){
  
  const name =  req.body.name
  const password = req.body.password

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