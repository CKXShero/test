//引入相对应的核心模块
var http = require('http')
//创建一个服务
var server = http.createServer()
// 为服务注册request事件
server.on('request',function(req,res){
    console.log('收到客户端请求，请求路径是：'+req.url)
})
// 为服务注册监听事件
server.listen(3000,function(){
    console.log('server is running')
})
