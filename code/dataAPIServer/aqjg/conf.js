// 本地库用于在没有网络的时候进行后台开发，如果有网络建议使用省厅库或者aws库,数据库端口统一改为27000
var dbPath = {
    // 本地库
    localPath:'127.0.0.1:27000/',
    // aws库
    awsPath:'52.53.170.226:27000/',
    // 省厅linux库
    ln_linuxPath:'218.60.147.240:27000/',
}


module.exports = dbPath;