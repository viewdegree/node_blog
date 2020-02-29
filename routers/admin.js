/*
 * @Author: your name
 * @Date: 2020-02-28 18:21:57
 * @LastEditTime: 2020-02-28 18:29:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blog\routers\admin.js
 */
const express = require("express");

const router = express.Router();

router.get('/user',(req,res)=>{
    res.send('admin-user')
})

//暴露出路由
module.exports = router;
