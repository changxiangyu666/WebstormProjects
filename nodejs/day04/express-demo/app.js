/**
 * Created by 常香玉 on 2019/10/6.
 */
var express=require('express')

var app=express()

//app.use('/public/',express.static('./public/'))
//当省略第一个参数的时候，则可以通过省略/public的方式访问
//app.use(express.static('./public'))
//public 的别名，通过/static/public 里的资源名字访问
app.use('/static',express.static('./public/'))

app.get('/', function (req, res) {
    res.send('hello world')
})

app.listen(3000, function () {
    console.log('running')
})