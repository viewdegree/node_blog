/*
 * @Author: your name
 * @Date: 2020-02-26 20:51:52
 * @LastEditTime: 2020-02-26 21:01:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blog\app.js
 */
const express = require('express');
const mongoose = require('mongoose');
const app = express();
//设置模板引擎
app.set('view engine','ejs');

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

