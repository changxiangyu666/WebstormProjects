/**
 * Created by 常香玉 on 2019/10/6.
 */
var express=require('express');
var bodyParser=require('body-parser');

var app=express();

var comments = [
    {
        name: '张三',
        message: '今天天气不错！',
        dateTime: '2015-10-16'
    },
    {
        name: '张三2',
        message: '今天天气不错！',
        dateTime: '2015-10-16'
    },
    {
        name: '张三3',
        message: '今天天气不错！',
        dateTime: '2015-10-16'
    },
    {
        name: '张三4',
        message: '今天天气不错！',
        dateTime: '2015-10-16'
    },
    {
        name: '张三5',
        message: '今天天气不错！',
        dateTime: '2015-10-16'
    }
]

app.use('/public/',express.static('./public/'));

//npm install --save art-template express-art-template
//配置模板引擎
app.engine('html', require('express-art-template'));
//res.render('html模板名',{模板数据})
//第一个参数不能写路径，默认会去项目中的views目录查找该模板文件
//如果想要修改默认的 views 目录，则可以 app.set('views',render函数的默认路径)

//npm install --save body-parser
//配置 body-parser 中间件（插件，专门用来解析表单post请求体）
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.render('index.html',{
        comments:comments
    });
});

app.get('/post', function (req, res) {
    res.render('post.html');
});

app.post('/post', function (req, res) {
    var comment=req.body;
    comment.dateTime='2019-10-6 0:00:46';
    comments.unshift(comment);
    res.redirect('/');
});
/*app.get('/pinglun', function (req, res) {
    //req.query只能拿get请求参数
    var comment=req.query;
    comment.dateTime='2019-10-6 0:00:46';
    comments.unshift(comment);
    res.redirect('/');
});*/

app.listen(3000, function () {
    console.log('running...');
});