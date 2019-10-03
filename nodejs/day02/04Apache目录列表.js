/**
 * Created by 常香玉 on 2019/10/2.
 */
var http = require('http')
var fs = require('fs')

// 1. 创建 Server
var server = http.createServer()

var wwwDir = 'C:/www'

server.on('request', function (req, res) {
    var url = req.url

    fs.readFile('./template.html', function (err,data) {
        if(err){
            return res.end('404 Not Found')
        }
        /*
        * 1.如何得到wwwDir目录列表中的文件名和目录名
        *   fs.readdir
        * 2.如何将得到的文件名和目录名替换到template.html中
        *   2.1在template.html中需要替换的位置预留一个特殊的标记
        *   2.2根据files生成需要的HTML内容
        * */
        fs.readdir(wwwDir, function (err,files) {
            if(err){
                return res.end('Can not find www dir.')
            }
            var content = ''
            files.forEach(function (item) {
                // 在 EcmaScript 6 的 ` 字符串中，可以使用 ${} 来引用变量
                content += `
                    <tr>
                        <td data-value="apple/"><a class="icon dir" href="/C:/www/apple/">${item}/</a></td>
                        <td class="detailsColumn" data-value="0"></td>
                        <td class="detailsColumn" data-value="1509589967">2019/11/2 上午10:32:47</td>
                    </tr>
                `
            })
            // 2.3 替换
            data=data.toString()
            data=data.replace('^_^',content)
            // 3. 发送解析替换过后的响应数据
            res.end(data)
        })
    })
})

// 3. 绑定端口号，启动服务
server.listen(3000, function () {
    console.log('running...')
})