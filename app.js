/*
 * @Author: viewdegree
 * @Date: 2020-02-13 16:51:36
 * @LastEditTime : 2020-02-13 20:25:08
 * @LastEditors  : Please set LastEditors
 * @Description: 主文件
 * @FilePath: \node_blog\app.js
 */
const express = require("express");
const mongoose = require("mongoose")
const app = express();
const bodyParser = require("body-parser");
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ //使用bodyParser中间件,开启bodyParser
    extended: false //不写次对象控制台会显示提示语句
}));
/***
 * 根据不同的模块划分不同的路由
 * 1.前端路由
 * 2.后端路由
 * 3.注册登录路由
 *  
 */
app.use("/admin", require("./routers/admin"));
app.use("/api", require("./routers/api"));
app.use("/", require("./routers/main"));


app.use(express.static("public"));

mongoose.connect('mongodb://localhost:27017/blog', { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    if (err) { //如果连接成功
        console.log('数据库连接失败');
        return;
    }
    console.log('数据库连接成功!');
    //开启服务器
    app.listen(3000);
});