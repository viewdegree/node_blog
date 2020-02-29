/*
 * @Author: your name
 * @Date: 2020-02-26 20:51:52
 * @LastEditTime: 2020-02-29 10:41:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blog\app.js
 */
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ //使用bodyParser中间件,开启bodyParser
    extended: false      //不写次对象控制台会显示提示语句
}));
//设置模板引擎
app.set('view engine','ejs');
/***
 * 根据不同的模块划分不同的路由
 * 1.后台路由
 * 2.前台路由
 * 3.登陆注册
 */
//引入路由文件
app.use("/admin",require('./routers/admin'));
app.use("/",require('./routers/main'));
app.use("/api",require('./routers/api'));
// 静态文件
app.use(express.static('public'));

mongoose.connect('mongodb://localhost:27017/student', 
{useNewUrlParser: true, useUnifiedTopology: true},(err)=>{
    if(err){    //如果连接成功
        console.log('数据库连接失败');
        return;
    }
    console.log('数据库连接成功!');
    app.listen(3000)
});

