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
      console.log(orgs);
      // 返回数据
      res.send(JSON.stringify(orgs));
    }
  })
});
/* 增加节点 */
router.post('/insertOrg',function(req,res,next){
  if(req.method != "OPTIONS")
  // 实现跨域请求
  // { id: '0',
  // parent: 'n114',
  // icon: 'ion-ios-folder',
  // text: '测试',
  // state: { opened: true } }
  var newOrg = req.body;
  console.log(newOrg);
  // 创建表对象
  var o_org = new Org({
    id: newOrg.id,
    parent: newOrg.parent,
    icon: newOrg.icon,
    text: newOrg.text,
    state: {
      // 默认展开
        opened: true
    },
  });
  
  // 保存
  o_org.save(function (err, res) {
    if (err) {
      console.log(err);
<<<<<<< HEAD
    } else {
      console.log('保存成功' + res);
=======
    }else{
      console.log('保存成功'+res);
>>>>>>> 2c59ec6c1c710435e82accb82f96ce267a9c2ace
    }
  });


  return res.send("请求成功");
  // var o_org = new Org({
  //   id: newOrg.id,
  //   parent: newOrg.parent,
  //   icon: newOrg.icon,
  //   text: newOrg.text,
  //   state: {
  //       opened: newOrg.state.opened
  //   },
  // });
  // o_org.save(function(err,res){
  //   if(err){
  //     console.log(err);
  //   }else{
  //     console.log('保存成功'+res);
  //   }
  // });
  next();
});

/* 删除节点(get方法实现)*/
router.get('/delOrg',function(req,res,err){
  // console.log(req.query);
  var delConditions = req.query;
  // console.log(parmas);
  console.log(delConditions);
  Org.remove(delConditions,function(err,res){
    if(err){
      console.log(err);
    }else{
      console.log('删除成功'+ res);
    }

  });
  return res.send("删除成功");
});
module.exports = router;