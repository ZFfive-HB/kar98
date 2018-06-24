var mongoose = require('mongoose');
// 常用类型：string number boolean array buffer date objectid mixed
var testSchema = new mongoose.Schema({
    num: Number,
   
});

module.exports = mongoose.model('test',testSchema);;