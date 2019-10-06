/**
 * Created by 常香玉 on 2019/10/4.
 */
var foo='bar'
function add(x,y){
    return x+y;
}
//exports.add=add;
exports.str='hello'
//如果一个模块需要直接导出某个成员，而非挂载的方式
module.exports=add;

//在node中，每个模块内部都有一个自己的module对象
//该module对象中，有一个成员叫：exports也是对象
//如果需要对外导出成员，只需要把导出的成员挂载到 module.exports 中

/*
var module={
    exports:{
        foo:'bar'
    }
}*/

//在模块中还有一句代码
//var exports=module.exports
//给exports或module.exports重新赋值会断开两者之间的引用关系

// exports=== module.exports
module.exports.foo='bar'
exports.add= function (x,y) {
    return x+y;
}

//谁require，谁就得到module.exports
//默认在代码的最后有一句：
//return module.exports