/**
 * Created by 常香玉 on 2019/10/2.
 */
function say() {
    console.log('hello world')
}
say()
/*;(function () {
    console.log('hello')
})()*/
;['苹果','石榴'].forEach(function (item) {
        console.log(item)
    })

// ` 是EcmaScript 6 中新增的一种字符串包裹方式，叫做：模板字符串。
//它支持换行和非常方便的拼接变量
/*var foo = `data`
console.log(foo)
;   `hello`.toString()*/

/*
* 当采用了无分号的代码风格的时候，只需要注意以下情况就不会有报错问题了：
* 当一行代码是以：（、[、` 开头的时候
* 则在前面补上一个分号用以避免一些语法解析错误
* */