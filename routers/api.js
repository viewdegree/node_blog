/*
 * @Author: your name
 * @Date: 2020-02-28 18:21:57
 * @LastEditTime: 2020-02-29 11:09:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 */
const express = require("express");

const router = express.Router();
//统一后台返回的格式 code message
let responseData = {

};

router.post('/register',(req,res)=>{
    console.log(req.body);
    let {username,password,repassword} = req.body;
// 数据校验
    if(username===''){
        responseData.code=1;
        responseData.message = '用户名不能为空'
        res.send(responseData);
        return;
    }
    if(password===''){
        responseData.code=2;
        responseData.message = '密码不能为空'
        res.send(responseData);
        return;
    }
    if(password!==repassword){
        responseData.code=3;
        responseData.message = '两次密码不一致'
        res.send(responseData);
        return;
    }


    // 数据校验成功
    responseData.code=0;
    responseData.message = '注册成功'
    res.send(responseData);
})
//暴露出路由
module.exports = router;
