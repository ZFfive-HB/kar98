// 框架引用，必须
var express = require('express');
// 路由引用，必须
var router = express.Router();
// 处理url请求参数
var url = require('url');
// 数据模型中间件
var mongoose = require('mongoose');

// 数据库配置
DB_URL = 'mongodb://localhost:27000/test'

// 连接
mongoose.connect(DB_URL);
// 监听连接成功
mongoose.connection.on('connected',function(){
    console.log('连接成功，当前地址为'+ DB_URL);
});