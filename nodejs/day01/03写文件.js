/**
 * Created by 常香玉 on 2019/9/30.
 */
var fs=require('fs');
//第一个参数是文件路径，第二个参数是文件内容，第三个参数是回调函数
fs.writeFile('./data/你好>.md','大家好，我是某某', function (error) {

    if(error){
        console.log("写入失败");
    }else{
        console.log("写入成功");
    }
});