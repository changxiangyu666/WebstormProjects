/**
 * Created by ������ on 2019/10/3.
 */
var url=require('url')
var obj=url.parse('/pinglun?name=����$message=��˹��',true);
console.log(obj);
console.log(obj.query)