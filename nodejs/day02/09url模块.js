/**
 * Created by 常香玉 on 2019/10/3.
 */
var url=require('url')
var obj=url.parse('/pinglun?name=安保$message=艾斯比',true);
console.log(obj);
console.log(obj.query)