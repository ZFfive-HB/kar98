// 框架引用，必须
var express = require('express');
// 路由引用，必须
var router = express.Router();
// 处理url请求参数
var url = require('url');
//组织机构
var Org = require('../models/org/orgModel');
/* 初始页面加载*/
router.get('/getOrg', function (req, res) {
  // 获取url参数，依赖于url模块
  //   var parmas = url.parse(req.url, true).query;
  //   console.log(parmas);
  // console.log(Org);

  // 直接调用实例的方法

  Org.fetch(function (err, orgs) {
    if (err) {
      console.log(err);
    } else {
      // 实现跨域请求
      res.setHeader("Access-Control-Allow-Origin","*");
      // 返回数据
      res.send(JSON.stringify(orgs));
    }
  })
});

module.exports = router;