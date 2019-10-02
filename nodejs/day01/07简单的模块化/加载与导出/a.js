/**
 * Created by 常香玉 on 2019/9/30.
 */
//require 方法有两个作用：
    //1.加载文件模块并执行里面的代码 (require)
    //2.拿到被加载文件模块导出的接口对象(exports)


var bExports=require("./b");
console.log(bExports.foo);
console.log(bExports.add(10,20));
console.log(bExports.age);