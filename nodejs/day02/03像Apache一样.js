/**
 * Created by ������ on 2019/10/2.
 */
var http = require('http')
var fs = require('fs')

// 1. ���� Server
var server = http.createServer()

var wwwDir = 'C:/www'

server.on('request', function (req, res) {
    var url = req.url
    // / index.html
    // /a.txt wwwDir + /a.txt
    // /apple/login.html wwwDir + /apple/login.html
    // /img/ab1.jpg wwwDir + /img/ab1.jpg
   var filePath='/index.html'
    if(url!=='/'){
        filePath=url
    }
    fs.readFile(wwwDir+filePath, function (err,data) {
        if(err){
            return res.end('404 Not Found')
        }
        res.end(data)
    })
})

// 3. �󶨶˿ںţ���������
server.listen(3000, function () {
    console.log('running...')
})
