/*
 * @Author: your name
 * @Date: 2020-02-28 18:21:57
 * @LastEditTime: 2020-02-29 10:59:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 */
const express = require("express");

const router = express.Router();
//统一后台返回的格式
let responseData = {};

router.post('/register',(req,res)=>{
    console.log(req.body);
})
//暴露出路由
module.exports = router;
