/*
 * @Author: your name
 * @Date: 2020-02-28 18:22:10
 * @LastEditTime: 2020-02-28 18:46:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blog\routers\main.js
 */
const express = require("express");

const router = express.Router();

// 渲染首页
router.get('/',(req,res)=>{
    res.render('main/index');
})

//暴露出路由
module.exports = router;