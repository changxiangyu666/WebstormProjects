/**
 * Created by 常香玉 on 2019/10/2.
 */
//art-template 不仅可以在浏览器使用，也可以在node 中使用
//安装
//  npm install art-template --save
//  该命令在哪执行就会吧包下载到哪里。默认会下载到 node_modules 目录中
//  node_modules 不要改，也不支持改
//引包
//  在需要使用的文件模块中加载 art-template
//查文档，使用模板引擎的 API

var template=require('art-template')
var fs=require('fs')
fs.readFile('./tpl.html', function (err,data) {
    if(err){
        return console.log('读取文件失败了')
    }
    var ret=template.render(data.toString(), {
        name: 'Jack',
        age:18,
        province:'深圳',
        hobbies:[
            '学习',
            '打游戏'
        ]
    });
    console.log(ret)
})

