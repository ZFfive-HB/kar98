// 框架引用，必须
var express = require('express');
// 路由引用，必须
var router = express.Router();
// 处理url请求参数
var url = require('url');
//组织机构
var NationLaws = require('../models/nationLaws/nationLawsModel');

/* 增加节点 */
router.post('/insertLaw',function(req,res,next){
  if(req.method != "OPTIONS")
  var newLaw = req.body;
  // 创建表对象
  var o_nationLaws = new NationLaws(newLaw);
  // 保存
  o_nationLaws.save(function (err, res) {
    if (err) {
      console.log(err);
    }else{
      console.info('res');
      console.info(res);
      console.log('保存成功'+res);
    }
  });
  return res.send("请求成功");
  next();
});

router.post('/updateLaw',function(req,res,next){
    if(req.method != "OPTIONS")
    var updateLaw = req.body;
    // 创建表对象
    //var o_nationLaws = new NationLaws();
    // 保存
    NationLaws.updateOne({id:updateLaw.id},updateLaw,function (err, res) {
      if (err) {
        console.log(err);
      }else{
        console.info(res);
        console.log('修改成功'+res);
      }
    });
    return res.send("请求成功");
    next();
});

/* 初始页面加载*/
router.post('/getLaws', function (req, res) {
    var param = req.body;
    console.info(param);
    // 直接调用实例的方法
    NationLaws.find({type:param.type}, function (err, laws) {
      if (err) {
        console.log(err);
      } else {
        // 实现跨域请求
        res.setHeader("Access-Control-Allow-Origin","*");
        console.log(laws);
        // 返回数据
        res.send(JSON.stringify(laws));
      }
    })
});

/* 删除*/
router.post('/deleteLaw',function(req,res,err){
  var delConditions = req.query;
  console.info(delConditions);
  // console.log(parmas);
  NationLaws.remove(delConditions,function(err,res){
    if(err){
      console.log(err);
    }else{
      console.log('删除成功'+ res);
    }
  });
  return res.send("删除成功");
});

module.exports = router;