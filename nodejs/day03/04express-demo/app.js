/**
 * Created by 常香玉 on 2019/10/5.
 */
var express=require('express');

//也就是原来的 http.createServer()
var app=express();

//公开指定目录
//可以通过/public/xxx的方式访问public目录中的所有资源了
app.use('/public/',express.static('./public'));

app.get('/', function (req,res) {
    //在Express 中可以直接 req.query 来获取查询字符串参数
    res.send('hello world')
})
app.get('/about', function (req,res) {
    res.send('你好 I am Express')
})

app.listen(3000, function () {
    console.log('app is running at port')
})