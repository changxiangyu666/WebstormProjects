/**
 * Created by ������ on 2019/10/2.
 */
var fs=require('fs')
fs.readdir('C:/www', function (err,files) {
    if(err){
        return console.log('Ŀ¼������')
    }
    console.log(files)
})