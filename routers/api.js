/*
 * @Author: your name
 * @Date: 2020-02-13 18:47:45
 * @LastEditTime : 2020-02-13 20:50:52
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \node_blog\routers\api.js
 */

const express = require("express");

const router = express.Router();

//统一后台返回的格式
let resDate = {};



router.post('/signin', (req, res) => {
    let { username, password, repassword, email } = req.body;

    if (username === '') {
        resDate.code = 1;
        resDate.message = "用户名不能为空";
        res.send(resDate);
        return;
    }

    if (password === '') {
        resDate.code = 1;
        resDate.message = "密码不能为空";
        res.send(resDate);
        return;
    }

    if (email === '') {
        resDate.code = 1;
        resDate.message = "邮箱不能为空";
        res.send(resDate);
        return;
    }

    if (password !== repassword) {
        resDate.code = 1;
        resDate.message = "密码不一致";
        res.send(resDate);
        return;
    }

    //从数据库中查询用户名是否被注册了如果已经注册了,则这个注册是失败的
    resDate.code = 0;
    resDate.message = "注册成功";
    res.send(resDate);


})

module.exports = router;