/**
 * Created by ������ on 2019/10/6.
 */
var express=require('express')

var app=express()

//app.use('/public/',express.static('./public/'))
//��ʡ�Ե�һ��������ʱ�������ͨ��ʡ��/public�ķ�ʽ����
//app.use(express.static('./public'))
//public �ı�����ͨ��/static/public �����Դ���ַ���
app.use('/static',express.static('./public/'))

app.get('/', function (req, res) {
    res.send('hello world')
})

app.listen(3000, function () {
    console.log('running')
})