/**
 * Created by 常香玉 on 2019/9/30.
 */
    /*
    * ip 地址用来定位计算机
    * 端口号用来定位具体的应用程序
    * 所有需要联网通信的应用程序都会占用一个端口号
    * */
var http=require("http");

//1.创建Server
var server=http.createServer();
//2.监听request 请求事件，设置请求处理函数
server.on("request", function (request,response) {
    //1.获取请求路径
    //2.判断路径处理响应
    var url=request.url;
    if(url==="/"){
        response.end("index page");
    }else if(url==="/login"){
        response.end("login page");
    }else if(url==="/products"){
        var products=[
            {
                name:'苹果 X',
                price:8888
            },
            {
                name:'菠萝 X',
                price:5888
            },
            {
                name:'小辣椒 X',
                price:1888
            }
        ];
        response.end(JSON.stringify(products));
    }else{
        response.end("404 Not Found.");
    }
});
//3.绑定端口号，启动服务
server.listen(3000, function () {
    console.log("服务器启动成功了，可以通过http://127.0.0.1:3000/来进行访问");
});