var createError = require('http-errors');
// 接口框架
var express = require('express');
// 路径
var path = require('path');
// 处理cookie
var cookieParser = require('cookie-parser');
// 日志
var logger = require('morgan');

var app = express();
// 为避免冲突，修改监听端口，默认端口为3000.也可以在www文件中修改
process.env.PORT = '4001';
// app.set('port', process.env.PORT || '4001');

// mongodb建模中间件
var mongoose = require('mongoose');
// 数据库配置
DB_URL = 'mongodb://127.0.0.1:27000/test'
// 连接mongodb
mongoose.connect(DB_URL);
// 数据库启动脚本 mongod -f /usr/local/etc/mongod.conf

/**
 * 接口路由
 */
// 每个模块对应一个js文件
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
// 组织架构
var org = require('./routes/org');

// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));
// 默认路由
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/org', org);

/** 
 * 模板引擎,这里可以不用
 */
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// 404 
app.use(function (req, res, next) {
  next(createError(404));
});

// 500
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;