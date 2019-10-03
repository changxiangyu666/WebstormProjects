/**
 * Created by 常香玉 on 2019/10/2.
 */
var fs=require('fs')
fs.readdir('C:/www', function (err,files) {
    if(err){
        return console.log('目录不存在')
    }
    console.log(files)
})