var mongoose = require('mongoose');

// 构建实体类，常用类型：string number boolean array buffer date objectid mixed
var OrgSchema = new mongoose.Schema({
    id: String,
    parent: String,
    icon: String,
    text: String,
    state: {
        opened: Boolean
    },
    meta: {
        createAt: {
            type: Date,
            defult: Date.now()
        },
        updateAt: {
            type: Date,
            defult: Date.now()
        }
    }
});
//每次在存储数据之前都会调用此方法
OrgSchema.pre('save', function (next) {
    // 如果是新增数据则创建时间为当前时间,如果数据已经存在则只更新更新时间即可
    if (this.isNew) {
        this.meta.createAt = this.meta.updateAt = Date.now();
    } else {
        this.meta.updateAt = Date.now();
    }
    // 继续执行其他操作
    next();
});
// 为模型定义一些静态方法，简化路由中的操作，方法不会自动执行，只有经过model或entity才会执行
OrgSchema.statics = {
    // 查询全部数据,并按照更新时间排序
    fetch: function (cb) {
        return this.find({})
            .exec(cb)
    },
    // 查询指定数据
    findById: function (cb) {
        return this.findOne({
                _id: id
            })
            .exec(cb)
    },


};
// 生成数据模型,注意！！！mongoose会自动在集合后面加上s，所以对应的集合应该是orgs
var Org = mongoose.model('Org', OrgSchema);
// 数据初始化
// mongoimport --db test --collection org --file /Users/maylis/Desktop/github上的项目/kar98/code/blur-admin-master/src/app/pages/org/org/org.json

module.exports = Org;