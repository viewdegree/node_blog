/*
 * @Author: viewdegree
 * @Date: 2020-02-13 18:47:50
 * @LastEditTime : 2020-02-13 19:45:22
 * @LastEditors  : Please set LastEditors
 * @Description: 处理首页的请求
 * @FilePath: \node_blog\routers\main.js
 */

const express = require("express");

const router = express.Router();

router.get('/', (req, res) => {
    res.render('main/index');
})
router.get('/signin', (req, res) => {
    res.render('main/signin');
})
router.get('/login', (req, res) => {
    res.render('main/login');
})
module.exports = router;