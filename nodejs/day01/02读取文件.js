/**
 * Created by 常香玉 on 2019/9/30.
 */
//浏览器中的JavaScript是没有文件操作的能力的

/*
* fs是file-system的简写，就是文件系统的意思
* 在node中如果想要进行文件操作，就必须引入fs这个核心模块
* 在fs这个核心模块中，就提供了所有的文件操作相关的API
* */

//1.使用require方法加载fs核心模块
var fs =require('fs');
//2.读取文件
//第一个参数是要读取的文件路径，第二个参数是一个回调函数
/*
* 成功
*   data 数据
*   error null
* 失败
*   data undefined没有数据
*   error 错误对象
* */
fs.readFile('./data/hello', function (error,data) {
//console.log(data);
   if(error){
       console.log("读取文件失败");
       return
   }
    console.log(data.toString());
});