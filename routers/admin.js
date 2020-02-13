/*
 * @Author: viewdegree
 * @Date: 2020-02-13 18:47:33
 * @LastEditTime : 2020-02-13 18:54:52
 * @LastEditors  : Please set LastEditors
 * @Description:  在后端页面/admin的路由
 * @FilePath: \node_blog\routers\admin.js
 */

const express = require("express");

const router = express.Router();

router.get('/user', (req, res) => {
    res.send("admin/user");
})

module.exports = router;