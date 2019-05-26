const express = require('express')
const mongoose = require('mongoose')
const session = require('express-session');
const bodyparser = require('body-parser');
const accountRouter = require('./account');
const userRouter = require('./user');
const redisStore = require('connect-redis')(session);
const ioRedis = require('ioredis');


const app =  express();

app.use(bodyparser.urlencoded({ extended: false }))
app.use(bodyparser.json()); // 使用bodyparder中间件，


app.use('/account',accountRouter);
app.use('/user',userRouter);



//app.use(bodyparser.urlencoded({ extended: true }));


//设置服务器跨域权限
// app.use(function (req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "X-Requested-With");
//     res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
//     next();
//   });


const redis = new ioRedis();
// 默认127.0.0.1:6379
// redis 链接错误

redis.on("error", function (error) {
    console.log(error);
});






 // 使用 session 中间件
app.use(session({
    name: 'session-name', // 这里是cookie的name，默认是connect.sid
    secret :  'secret', // 对session id 相关的cookie 进行签名  建议使用 128 个字符的随机字符串
    resave : true,
    saveUninitialized: false, // 是否保存未初始化的会话/*强制保存 session 即使它并没有变化,。默认为 true。建议设置成 false。*/
    cookie : {
        maxAge : 1000 * 60 * 3, // 设置 session 的有效时间，单位毫秒
    },
    store: new redisStore({
        host: '127.0.0.1',
        port: '6379',
        db: 0,
        pass: '',
    })
}));




app.listen(9093, function(){
    console.log('Node app start at port 9093.....!')
})