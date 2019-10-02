/**
 * Created by 常香玉 on 2019/9/30.
 */
/*
* require是一个方法，作用是用来加载模块的
* 在node中，模块有三种：
*   具名的核心模块，例如 fs、http
*   用户自己编写的文件模块
*
*   相对路径中的 ./ 不能省略，可以省略后缀名
*
*   node 中没有全局作用域,只有模块作用域
* */
var foo="aaa";
console.log("a.js文件被加载执行了");
function add(x,y){
    return x+y;
}
require("./b.js");
console.log("a.js end");
console.log(foo);