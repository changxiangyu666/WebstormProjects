/**
 * Created by 常香玉 on 2019/10/3.
 */
var http = require('http')
var fs = require('fs')
var template=require('art-template')

// 1. 创建 Server
var server = http.createServer()

var wwwDir = 'C:/www'

server.on('request', function (req, res) {
    var url = req.url
    fs.readFile('./template-apache.html', function (err,data) {
        if(err){
            return res.end('404 Not Found')
        }
        fs.readdir(wwwDir, function (err,files) {
            if(err){
                return res.end('Can not find www dir.')
            }
            data=template.render(data.toString(),{
                files:files,
                title:'C:\www\ 的索引'
            })
            // 3. 发送解析替换过后的响应数据
            res.end(data)
        })
    })
})

// 3. 绑定端口号，启动服务
server.listen(3000, function () {
    console.log('running...')
})